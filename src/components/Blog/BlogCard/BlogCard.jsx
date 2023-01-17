import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const BlogCard = () => {
  return (
    <div className=" shadow-2xl bg-slate-600 hover:cursor-pointer">
      <div className="cont">
        <div className="h-[150px] bg-gray-200">
          <img
            src=""
            alt=""
            className="object-cover"
          />
        </div>
        <div className="flex items-start justify-between text-left py-8 px-4">
          <h4 className="text-white font-semibold text-lg w-3/5">
            10 resume writing tips to land your new job
          </h4>
          <span>
            <AiOutlineArrowRight className="text-2xl" />{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
