import React from 'react'
import TestCard from './TestCard/TestCard'
import A1 from '../../assets/avatar_icons_1.png'
import A2 from '../../assets/avatar_icons_2.png'
import A3 from '../../assets/avatar_icons_3.png'

const Testimonials = () => {
  return (
    <div className='md:py-24'>
      <div className="cont">
        <h1 className='text-4xl mb-8 text-white'>What our client says</h1>
        <div className="card_cont grid grid-cols-3 gap-8">
            <TestCard img={A1}/>
            <TestCard img={A2}/>
            <TestCard img={A3}/>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
