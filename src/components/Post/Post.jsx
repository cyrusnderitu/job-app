import React from "react";
import Globe from "../../assets/navigation.png";
import A1 from "../../assets/avatar_icons_1.png";
import A2 from "../../assets/avatar_icons_2.png";
import A3 from "../../assets/avatar_icons_3.png";

const Post = () => {
  return (
    <div className="md:py-24">
      <div className="cont flex items-center justify-between">
        <div className="left flex-1">
          <div className="post_cont grid gap-y-4">
            <h1 className="text-white text-4xl font-semibold w-4/5">
              So Many People are engaged all over the world
            </h1>
            <p className="text-gray-400">
              AS a startup, yo might be looking to exapnd your team in order to
              build or scale, looking for funding or being in the need of best
              practice tools such as a pitch deck or emplyment contracts
            </p>

            <button className="bg-lime-300 font-semibold border-none rounded-2xl py-2 px-4 w-fit">
              Post a job
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <div className="globe flex justify-center relative">
            <img
              src={Globe}
              alt=""
              className="w-[60%] p-10 border-dotted border-4 border-gray-400 border-spacing-4 rounded-[50%]"
            />
            <img
              src={A3}
              alt=""
              className="h-[50px] absolute -top-5 bg-red-200 px-2 rounded-[50%]"
            />
            <img
              src={A1}
              alt=""
              className="h-[50px] absolute -bottom-5 bg-purple-400 px-2 rounded-[50%]"
            />
            <img
              src={A2}
              alt=""
              className="h-[50px] absolute left-24 top-0 bottom-0 my-auto bg-cyan-200 px-2 rounded-[50%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
