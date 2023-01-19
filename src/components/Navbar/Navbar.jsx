import React from 'react'
import {FcWorkflow} from 'react-icons/fc'

const Navbar = () => {
  return (
    <div className='h-20 grid'>
        <nav className='flex justify-between items-center'>
            <div className="logo flex gap-2 items-center">
                <FcWorkflow className='text-4xl'/>
                <h1 className='text-3xl font-bold text-white'>Talent</h1>
            </div>
            <div className="menu">
                <div className="menu_cont flex md:flex-row gap-8">
                    <ul className=" flex items-center md:flex-row gap-8 nav_list list-none">
                        <a href="" className='text-white hover:underline-offset-4 hover:text-lime-300 hover:underline'>Home</a>
                        <a href="" className='text-white hover:underline-offset-4 hover:text-lime-300 hover:underline'>Jobs</a>
                        <a href="" className='text-white hover:underline-offset-4 hover:text-lime-300 hover:underline'>Categories</a>
                        <a href="" className='text-white hover:underline-offset-4 hover:text-lime-300 hover:underline'>Resource</a>
                    </ul>
                    <button className="border-none text-white bg-slate-600 p-2 rounded-lg hover:bg-lime-300">Sign Up</button>
                </div>
                
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
