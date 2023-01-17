import React from "react";
import {AiFillStar} from 'react-icons/ai'

const TestCard = () => {
  return (
    <div className="px-6 py-10 shadow-2xl bg-slate-600 hover:text-slate-400 hover:bg-lime-200 hover:cursor-pointer">
      <div className="cont">
        <div className="flex gap-1 mb-2">
            <AiFillStar className="fill-orange-300"/>
            <AiFillStar className="fill-orange-300"/>
            <AiFillStar className="fill-orange-300"/>
            <AiFillStar className="fill-orange-300"/>
            <AiFillStar className="fill-orange-300"/>
        </div>
        <p className="text-gray-400 mb-6 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          eveniet. Illum fuga dignissimos libero quia ex excepturi! Quibusdam,
          deserunt autem!
        </p>
        <div>
            <p className="name text-gray-300">Sabo masties</p>
            <span className="title text-gray-500 text-sm">Founder of Rubiks</span>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
