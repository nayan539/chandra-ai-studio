import Carousel from '@/components/Carousel'
import Categories from '@/components/Categories'
import Navbar from '@/components/Navbar'
import Test from '@/components/Test'
import Topbar from '@/components/Topbar'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Categories/>
      <Carousel/>
      <Test/>
    </div>
  )
}

export default Home