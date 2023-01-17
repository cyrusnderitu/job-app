import React from "react";
import CatCard from "./CatCard/CatCard";
import {FaCoins} from 'react-icons/fa'
import {BsDropletHalf} from 'react-icons/bs'
import {AiOutlineStock} from 'react-icons/ai'
import Dev from '../../assets/browser_icons_1.png'
import Market from '../../assets/guy_with_glasses.png'
import Design from '../../assets/Recording Studio Illustration.png'
import Finance from '../../assets/miscellaneous_icons_7.png'

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
        <div className="cart_cont grid grid-cols-4 gap-10">
            <CatCard  icon={Finance} title="Finance"/>
            <CatCard  icon={Design} title="Design"/>
            <CatCard icon={Market} title="Marketing"/>
            <CatCard icon={Dev} title="Developer"/>
        </div>
      </div>
    </div>
  );
};

export default Categories;
