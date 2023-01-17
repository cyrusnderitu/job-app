import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import Google from '../../assets/google.png'
import Slack from '../../assets/slack.png'
import Amazon from '../../assets/amazon-pay.png'

const Sponsors = () => {
  return (
    <div className="px-16 md:py-28">
      <div className="cont flex justify-center items-start gap-x-12">
        <div className="left flex justify-between flex-1 gap-20">
          <div className="downloads">
            <h1 className="font-semibold text-3xl underline-offset-4 underline text-white mb-2">
              10K
            </h1>
            <div className="flex gap-1">
              <AiFillHeart className="fill-red-500" />
              <AiFillHeart className="fill-red-500" />
              <AiFillHeart className="fill-red-500" />
              <AiFillHeart className="fill-red-500" />
              <AiFillHeart className="fill-red-500" />
            </div>
            <p className="capitalize text-gray-500">
              Active downloads on websites
            </p>
          </div>
          <div className="rating">
            <h1 className="font-semibold text-3xl underline-offset-4 underline text-white mb-2">
              4.7
            </h1>
            <div className="flex gap-1">
              <AiFillStar className="fill-orange-300" />
              <AiFillStar className="fill-orange-300" />
              <AiFillStar className="fill-orange-300" />
              <AiFillStar className="fill-orange-300" />
              <AiFillStar className="fill-orange-300" />
            </div>
            <p className="capitalize text-gray-500">
              1,938 rating Wordpress community
            </p>
          </div>
        </div>
        <div className="right w-fit flex-1">
          <h3 className="text-4xl font-semibold text-white">
            {" "}
            Trusted by 25,000 + happy Marketers and Wordpress users since 2018
          </h3>
          <div className="mt-4">
            <p className="text-gray-500 mb-2">Also featured in:</p>
            <div className="featured flex justify-start gap-8">
              <img src={Google} alt="" className="h-[20px]"/>
              <img src={Slack} alt="" className="h-[20px]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
