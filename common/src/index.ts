import z from "zod";

// User Signup Zod schema
export const userSignupSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

// User Signin Zod schema
export const userSigninSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// Blog Zod schema
export const blogSchema = z.object({
  title: z.string().min(3),
  content: z.string(),
});

// Update Blog Zod schema
export const updateBlogSchema = z.object({
  id: z.string(),
  title: z.string().min(3),
  content: z.string(),
});

export type UserSignin = z.infer<typeof userSigninSchema>;
export type UserSignup = z.infer<typeof userSignupSchema>;
export type Blog = z.infer<typeof blogSchema>;
export type UpdateBlog = z.infer<typeof updateBlogSchema>;
