import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.use("/api/v1/blog/*", async (c, next) => {
  const jwt = c.req.header("Authorization");
  if (!jwt) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
  const token = jwt.split(" ")[1];
  const payload = await verify(token, c.env.JWT_SECRET);
  if (!payload) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
  await next();
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// signup
app.post("/api/v1/user/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({
      message: "User created",
      token,
    });
  } catch (e) {
    c.status(403);
    return c.json({ error: "error while signing up" });
  }
});

// signin
app.post("/api/v1/user/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ error: "user not found" });
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      message: "User signed in",
      token: jwt,
    });
  } catch (e) {
    c.status(403);
    return c.json({ error: "error while signing in" });
  }
});

app.put("/api/v1/blog", (c) => {
  return c.json({
    message: "PUT BLOG ROUTE",
  });
});

app.get("/api/v1/blog/:id", (c) => {
  return c.json({
    message: "GET ROUTE",
  });
});

app.get("/api/v1/blog/bulk", (c) => {
  return c.json({
    message: "GET bulk ROUTE",
  });
});

export default app;
