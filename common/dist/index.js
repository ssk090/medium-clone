"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogSchema = exports.blogSchema = exports.userSchema = void 0;
const zod_1 = __importDefault(require("zod"));
// User Zod schema
exports.userSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
// Blog Zod schema
exports.blogSchema = zod_1.default.object({
    title: zod_1.default.string().min(3),
    content: zod_1.default.string(),
});
// Update Blog Zod schema
exports.updateBlogSchema = zod_1.default.object({
    id: zod_1.default.string(),
    title: zod_1.default.string().min(3),
    content: zod_1.default.string(),
});
