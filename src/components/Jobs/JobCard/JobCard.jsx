import React from 'react'
import icon from '../../../assets/random_icons_23.png'

const JobCard = ({position, company, logo}) => {
  return (
    <div className='job_card px-6 py-8 shadow-2xl text-white hover:cursor-pointer'>
      <div className="cont">
        <div className='location flex items-center gap-2 mb-2'>
            <img src={icon} alt="img" className='h-[20px]' />
            <span className='text-gray-400 text-sm'>South Haven</span>
        </div>
        <div className='position'>
            <h4 className='text-xl mb-2 font-semibold'>{`${position} ${company}`}</h4>
            <p className='mb-10 text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis dolorem quo dolore natus quia.</p>
        </div>
        <div className='company flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <img src={logo} alt="img" className='bg-white w-[30px] h-[30px] rounded-[50%]' />
                <div className="company_title">
                    <p className='uppercase text-gray-300 text-sm'>Cravers Tech</p>
                    <span className='text-gray-500 text-sm'>19hours</span>
                </div>
            </div>
            <span className='p-2 rounded-md bg-slate-800 text-white text-sm'>Full Time</span>
        </div>
      </div>
    </div>
  )
}

export default JobCard
