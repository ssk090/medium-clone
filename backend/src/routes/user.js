import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { userSigninSchema, userSignupSchema } from "@shivanandasai/common";
export const userRouter = new Hono();
// signup
userRouter.post("/signup", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = userSignupSchema.safeParse(body);
    if (!success) {
        c.status(400);
        return c.json({ error: "invalid request body" });
    }
    try {
        const user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password,
            },
        });
        const token = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({
            message: "User created",
            token,
        });
    }
    catch (e) {
        c.status(403);
        return c.json({ error: "error while signing up" });
    }
});
// signin
userRouter.post("/signin", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = userSigninSchema.safeParse(body);
    if (!success) {
        c.status(400);
        return c.json({ error: "invalid request body" });
    }
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
    }
    catch (e) {
        c.status(403);
        return c.json({ error: "error while signing in" });
    }
});
