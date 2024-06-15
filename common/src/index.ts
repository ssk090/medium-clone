import z from "zod";

// User Zod schema
export const userSchema = z.object({
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

export type User = z.infer<typeof userSchema>;
export type Blog = z.infer<typeof blogSchema>;
export type UpdateBlog = z.infer<typeof updateBlogSchema>;
