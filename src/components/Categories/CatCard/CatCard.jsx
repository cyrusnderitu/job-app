import React from 'react'

const CatCard = ({icon, title}) => {
  return (
    <div className='px-6 py-10 shadow-2xl bg-slate-600 text-white hover:text-slate-400 hover:bg-lime-200 hover:cursor-pointer'>
      <div className="cont flex flex-col gap-8">
        <div className='flex justify-between items-center'>
            <div className='h-[50px] w-[50px] rounded-[50%]'>
              <img src={icon} alt="" className=''/>
            </div>
            <span className='text-sm'>146 jobs</span>
        </div>
        <div>
            <h4 className='uppercase text-xl font-semibold mb-2'>{title}</h4>
            <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>
  )
}

export default CatCard
