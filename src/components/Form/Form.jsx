import React from "react";

const Form = () => {
  return (
    <div className="">
        <div className="cont">
            <div className="headline mb-8 text-center">
                <h1 className="text-4xl font-bold text-white">Post a Job</h1>
                <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nihil
                delectus impedit labore quisquam assumenda.
                </p>
            </div>
            <form className='grid mob:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className="font-inter mob:text-[12px] md:text-[14px] lg:text-[16px]">
                <label htmlFor="name" className='font-bold text-white'>Name<span className='text-[#F4551E]'>*</span></label><br />
                <input type="text" placeholder='Enter Name' className='indent-4 py-2 bg-gray-100 text-gray-500 w-full border-1 rounded-md border-gray-300'/>
                </div>  
                <div className="font-inter mob:text-[12px] md:text-[14px] lg:text-[16px]">
                <label htmlFor="name" className='font-bold text-white'>Address<span className='text-[#F4551E]'>*</span></label><br />
                <input type="text" placeholder='Enter Address' className='indent-4 py-2 bg-gray-100 text-gray-500 w-full border-1 rounded-md border-gray-300'/>
                </div>  
                <div className="font-inter mob:text-[12px] md:text-[14px] lg:text-[16px]">
                <label htmlFor="name" className='font-bold text-white'>Unit Number<span className='text-[#F4551E]'>*</span></label><br />
                <input type="number" placeholder='Enter Unit' className='indent-4 py-2 bg-gray-100 text-gray-500 w-full border-1 rounded-md border-gray-300'/>
                </div>  
                <div className="font-inter mob:text-[12px] md:text-[14px] lg:text-[16px]">
                <label htmlFor="name" className='font-bold text-white'>City<span className='text-[#F4551E]'>*</span></label><br />
                <select className='indent-4 py-2 bg-gray-100 text-gray-500 w-full border-1 rounded-md border-gray-300'>
                    <option value="Select City" disabled>Select City</option>
                    <option value="new york">New York</option>
                    <option value="tokyo">Tokyo</option>
                    <option value="london">London</option>
                </select>
                </div>  
                <div className="font-inter mob:text-[12px] md:text-[14px] lg:text-[16px]">
                <label htmlFor="name" className='font-bold text-white'>State<span className='text-[#F4551E]'>*</span></label><br />
                <select className='indent-4 py-2 bg-gray-100 text-gray-500 w-full border-1 rounded-md border-gray-300'>
                    <option value="Select State" disabled>Select State</option>
                    <option value="carolina">North Carolina</option>
                    <option value="massachusetts">Massachusetts</option>
                    <option value="georgia">Georgia</option>
                </select>
                </div>  
                <div className="font-inter mob:text-[12px] md:text-[14px] lg:text-[16px]">
                <label htmlFor="name" className='font-bold text-white'>Room Type<span className='text-[#F4551E]'>*</span></label><br />
                <select className='indent-4 py-2 bg-gray-100 text-gray-500 w-full border-1 rounded-md border-gray-300'>
                    <option value="Select State" disabled>Master En-suite</option>
                    <option value="carolina">Single</option>
                    <option value="massachusetts">Double</option>
                    <option value="georgia">Triple</option>
                </select>
                </div>  
                <div className="font-inter mob:text-[12px] md:text-[14px] lg:text-[16px]">
                <label htmlFor="name" className='font-bold text-white'>Price<span className='text-[#F4551E]'>*</span></label><br />
                <input type="number" placeholder='In dollars ($)' className='indent-4 py-2 bg-gray-100 text-gray-500 w-full border-1 rounded-md border-gray-300'/>
                </div>  
                <div className="font-inter mob:text-[12px] md:text-[14px] lg:text-[16px]">
                <label htmlFor="name" className='font-bold text-white'>Room Type<span className='text-[#F4551E]'>*</span></label><br />
                <select className='indent-4 py-2 bg-gray-100 text-gray-500 w-full border-1 rounded-md border-gray-300'>
                    <option value="Select Room">Room Type</option>
                </select>
                </div>  
          </form>
        </div>
    </div>
  );
};

export default Form;
