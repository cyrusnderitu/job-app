import React from "react";
import CatCard from "./CatCard/CatCard";
import {FaCoins} from 'react-icons/fa'
import {BsDropletHalf} from 'react-icons/bs'
import {AiOutlineStock} from 'react-icons/ai'

const Categories = () => {
  return (
    <div className="">
      <div className="cont">
        <div className="headline flex gap-24 mb-12">
          <h1 className="text-4xl font-bold text-white">
            Explore <br /> by categoires
          </h1>
          <p className="text-gray-500 w-2/5">
            Finding a job should not be a full-time endeavor. Tell us what
            you're searching for, and we'll find your job. Finding a job should
            not be a full-tim endeavor
          </p>
        </div>
        <div className="cart_cont grid grid-cols-3 gap-10">
            <CatCard  icon={<FaCoins className="text-xl"/>} title="Finance"/>
            <CatCard  icon={<BsDropletHalf className="text-xl"/>} title="Design"/>
            <CatCard icon={<AiOutlineStock className="text-xl"/>} title="Marketing"/>
        </div>
      </div>
    </div>
  );
};

export default Categories;
