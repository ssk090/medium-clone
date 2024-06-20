import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeletinon";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="p-2 flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="p-2 flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              content={blog.content}
              publishedDate="Today"
              title={blog.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
