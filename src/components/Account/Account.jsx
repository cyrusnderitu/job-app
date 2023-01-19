import React from "react";
import Register from "../../assets/random_icons_20.png";
import Resume from "../../assets/ecommerce_icons_6.png";
import Job from "../../assets/random_icons_13.png";

const Account = () => {
  return (
    <div className="text-center">
      <span className="text-lime-300 uppercase font-semibold text-md mb-4">
        How it works
      </span>
      <h1 className="text-3xl text-white mb-8">
        Steps to getting your new job
      </h1>
      <div className="cont grid grid-cols-3 gap-4">
        <div className="register flex justify-center">
          <div className="flex flex-col items-center">
            <img src={Register} alt="" className="h-[50px]" />
            <h4 className="text-2xl text-white font-semibold">
              Register your account
            </h4>
            <p className="text-gray-400 px-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore, nihil culpa? Incidunt voluptatibus alias culpa.
            </p>
          </div>
        </div>
        <div className="register flex flex-col items-center ">
          <img src={Resume} alt="" className="h-[50px]" />
          <div className="register_data">
            <h4 className="text-2xl text-white font-semibold">Update Resume</h4>
            <p className="text-gray-400 px-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              optio consectetur cumque atque ipsam ratione.
            </p>
          </div>
        </div>
        <div className="register flex flex-col items-center ">
          <img src={Job} alt="" className="h-[50px]" />
          <div className="register_data">
            <h4 className="text-2xl text-white font-semibold">
              Apply for a Job
            </h4>
            <p className="text-gray-400 px-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem cumque sint saepe excepturi natus soluta!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
