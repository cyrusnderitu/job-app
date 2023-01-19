import React from "react";
import BlogCard from "./BlogCard/BlogCard";

const Blog = () => {
  return (
    <div className="md:pt-12 mb-8">
      <div className="cont text-center">
        <div className="mb-8">
          <h1 className="text-4xl text-white">Read our blogs</h1>
          <p className="text-gray-500">
            Read our regular blogs about jobs. You will get the latest news and
            alerts of any kind of jobs from our blog
          </p>
        </div>
        <div className="card_cont grid grid-cols-3 gap-8">
          <BlogCard title="Tips That Will boost your career in 2023" img="http://static1.squarespace.com/static/5fed5dd43fe4fe33db86d97b/5fed5e7e0493bd2827ccb60e/602a15a23a16522e1b921579/1616318527306/Career+Boost+brand+kit_Page_3.jpg?format=1500w"/>
          <BlogCard title="Top job hunting tips for fresh graduates" img="https://www.agcas.org.uk/write/MediaUploads/General%20Imagery/shutterstock_graduates.jpg"/>
          <BlogCard title="6 Reasons not to accept a counteroffer" img="https://www.experis.com/-/jssmedia/project/manpowergroup/experis/experis-us/articles/all_financial_planning_bluewash_rgb_150.jpg?h=2456&iar=0&w=3680&hash=41120466E49F796B65A751364B12ECB4"/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
