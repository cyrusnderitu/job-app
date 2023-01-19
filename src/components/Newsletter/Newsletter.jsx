import React from "react";
import Notification from "../../assets/notification_illustration12.png";
import Message from "../../assets/ecommerce_icons_12.png";

const Newsletter = () => {
  return (
    <div className="md:py-24">
      <div className="account_cont flex gap-x-8 items-center">
        <div className="left flex-1 w-full h-[300px] relative">
          <div className="h-[50%] bottom-0 w-[300px] mx-auto left-0 right-0 bg-slate-600 rounded-[40px] absolute"></div>
          <img
            src={Notification}
            alt=""
            className="h-[300px] mx-auto left-0 right-0 absolute"
          />
          <img src={Message} alt="" />
        </div>
        <div className="right flex-1">
          <div className="grid gap-4">
            <h1 className="text-4xl text-white w-4/5 font-semibold">
              Always get Updated on our Latest Job Post
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              quia, nobis perferendis assumenda ducimus doloremque incidunt?
              Atque quas ullam explicabo.
            </p>
            <form className="flex bg-white w-[70%] rounded-xl">
              <input
                type="email"
                placeholder="Email"
                className="w-full border-none indent-4 bg-transparent outline-none"
              />
              <button className="border-none bg-lime-300 py-2 px-4 font-semibold rounded-xl">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
