import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const BlogCard = ({title, img}) => {
  return (
    <div className=" shadow-2xl bg-slate-600 hover:cursor-pointer">
      <div className="cont">
        <div className="h-[150px] bg-gray-200">
          <img
            src={img}
            alt=""
            className=""
          />
        </div>
        <div className="flex items-start justify-between text-left py-8 px-4">
          <h4 className="text-white font-semibold text-lg w-4/5 capitalize">
            {title}
          </h4>
          <span>
            <AiOutlineArrowRight className="text-2xl" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
