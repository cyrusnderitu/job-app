import React from 'react'
import TestCard from './TestCard/TestCard'

const Testimonials = () => {
  return (
    <div className='md:py-24'>
      <div className="cont">
        <h1 className='text-4xl mb-8 text-white'>What our client says</h1>
        <div className="card_cont grid grid-cols-3 gap-8">
            <TestCard />
            <TestCard />
            <TestCard />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
