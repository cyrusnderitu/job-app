import React from "react";
import BlogCard from "./BlogCard/BlogCard";

const Blog = () => {
  return (
    <div className="md:py-24">
      <div className="cont text-center">
        <div className="mb-8">
            <h1 className="text-4xl text-white">Read our blogs</h1>
            <p className="text-gray-500">
            Finding a job hould not be a full-time endeavor. Tell us what you're
            searching or and we'll find you a job
            </p>
        </div>
        <div className="card_cont grid grid-cols-3 gap-8">
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default Blog;
