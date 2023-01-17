import React from "react";
import { BiSearch } from 'react-icons/bi'

const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="hero_cont w-full">
        <div className="top flex flex-col items-center text-center">
            <div className="w-[60%]">
                <h1 className="text-5xl font-semibold text-white mb-4 leading-16">Dreamjobs find talent, All in one place</h1>
                <p className="desc text-gray-400">
                    Finding a job should not be a full-time endeavor. Tell us what you're
                    searchin for, and we'll find your job
                </p>
                <div className="cta flex justify-center items-center gap-2 mt-4">
                  <button className="border-none py-4 px-8 rounded-[30px] text-black bg-lime-200 font-semibold text-[18px]">Hire Talent</button>
                  <div className="p-4 bg-white rounded-[50%]">
                    <BiSearch  className="text-2xl"/>
                  </div>
            </div>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Hero;
