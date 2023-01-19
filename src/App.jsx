import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Sponsors from './components/Sponsors/Sponsors'
import Categories from './components/Categories/Categories'
import Jobs from './components/Jobs/Jobs'
import Testimonials from './components/Testimonials/Testimonials'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import Post from './components/Post/Post'
// import Newsletter from './components/Newsletter/Newsletter'
import Account from './components/Account/Account'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='hh'>
        <Navbar />
        <Hero />
      </div>
      <Sponsors />
      <Categories />
      <Jobs />
      {/* <Newsletter /> */}
      <Account />
      <Testimonials />
      <Post />
      <Blog />
      <div className='flex justify-center mb-12'>
        <button className="border-none p-4 rounded-[30px] text-black bg-lime-200 font-semibold text-[18px]">Read More Articles</button>
      </div>
      <Footer />
    </div>
  )
}

export default App
