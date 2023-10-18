import React from "react";
import { BiSearch } from "react-icons/bi";
import C1 from "../../assets/character_icons_1.png";
import C2 from "../../assets/character_icons_2.png";
import C3 from "../../assets/character_icons_3.png";
import C4 from "../../assets/character_icons_4.png";
import C5 from "../../assets/character_icons_5.png";
import C6 from "../../assets/character_icons_6.png";
import C8 from "../../assets/character_icons_8.png";

const Hero = () => {
  return (
    <div className=" flex justify-center items-center z-20 mt-6">
      <div className="hero_cont w-full flex justify-center">
        <div className="flex flex-col gap-y-8 ">
          <div className="top flex flex-col items-center text-center">
            <div className="w-[60%]">
              <h1 className="text-5xl font-semibold text-white mb-4 leading-snug">
                Dreamjobs find talent, All in one place
              </h1>
              <p className="desc text-gray-400">
                Finding a job should not be a full-time endeavor. Let us know
                and we'll recommend a place of work that fit your criteria.
              </p>
              <div className="cta flex justify-center items-center gap-2 mt-4">
                <button className="border-none py-4 px-8 rounded-[30px] text-black bg-lime-200 font-semibold text-[18px]">
                  Hire Talent
                </button>
                <div className="p-4 bg-white rounded-[50%]">
                  <BiSearch className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="bottom flex items-center justify-center gap-8">
            <img
              src={C1}
              alt=""
              className="h-[180px] w-fit bg-cyan-300 rounded-lg pt-10 px-7"
            />
            <div className="flex flex-col gap-y-4 justify-center items-center">
              <img
                src={C2}
                alt=""
                className="h-[180px] w-fit bg-purple-500 rounded-lg pt-10 px-7"
              />
              <img
                src={C3}
                alt=""
                className="h-[180px] w-fit bg-yellow-200 rounded-lg pt-10 px-7"
              />
            </div>
            <img
              src={C4}
              alt=""
              className="h-[180px] w-fit bg-cyan-300 rounded-lg pt-10 px-7"
            />
            <div className="flex flex-col gap-y-4 justify-center items-center">
              <img
                src={C5}
                alt=""
                className="h-[180px] w-fit bg-orange-400 rounded-lg pt-10 px-4"
              />
              <img
                src={C6}
                alt=""
                className="h-[180px] w-fit bg-lime-300 rounded-lg pt-10 px-7"
              />
            </div>
            <img
              src={C8}
              alt=""
              className="h-[180px] w-fit bg-red-300 rounded-lg pt-10 px-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
