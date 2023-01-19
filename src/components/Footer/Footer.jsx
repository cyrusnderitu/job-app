import React from 'react'
import {FcWorkflow} from 'react-icons/fc'
import {AiFillFacebook, AiFillTwitterCircle, AiFillGoogleCircle, AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='md:pt-12 border-t-2'>
      <div className="cont flex justify-between items-start">
        <div className="left">
            <div className="headline">
                <div className='flex items-center gap-2 mb-3'>
                  <FcWorkflow className='text-4xl'/>
                  <h2 className='text-3xl text-white font-bold'>Hired</h2>
                </div>
                <p className='md:w-3/5 mb-4 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, incidunt?</p>
            </div>
            <div className="socials flex items-center gap-4">
                <a href=""><BsFacebook className=' text-[1.5rem] hover:fill-lime-300'/></a>
                <a href=""><AiFillTwitterCircle className=' text-[1.75rem] hover:fill-lime-300'/></a>
                <a href=""><AiFillGoogleCircle className=' text-[1.75rem] hover:fill-lime-300'/></a>
                <a href=""><AiFillInstagram className=' text-[1.75rem] hover:fill-lime-300'/></a>
            </div>
        </div>
        <div className="right">
            <div className="right_cont grid grid-cols-3 gap-12 text-white">
                <ul className='grid gap-y-4'>
                    <li>Community</li>
                    <li>Categories</li>
                    <li>For Companies</li>
                    <li>For Candidates</li>
                    <li>All jobs</li>
                </ul>
                <ul className='grid gap-y-4'>
                    <li>About us</li>
                    <li>Our Team</li>
                    <li>Testimonials</li>
                    <li>Our Stories</li>
                    <li> Why Jolux</li>
                </ul>
                <ul className='grid gap-y-4'>
                    <li>Useful</li>
                    <li>Free Resume</li>
                    <li>Career</li>
                    <li>Privacy & Policy</li>
                    <li>Blogs</li>
                </ul>
            </div>
        </div>
      </div>
      <div className='text-center mt-6'>
        <span className=''>Copyright &copy; 2023. All rights reserved </span>
      </div>
    </div>
  )
}

export default Footer
