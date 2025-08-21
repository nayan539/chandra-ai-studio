import AiImgCarousel from '@/components/carousels/AiImgCarousel'
import Carousel from '@/components/carousels/Carousel'
import Categories from '@/components/Categories'
import FeaturedProducts from '@/components/FeaturedProducts'
import Navbar from '@/components/Navbar'

import Test from '@/components/Test'
import Topbar from '@/components/Topbar'
import React from 'react'

const Home = () => {
  const slides = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1504151932400-72d4384f04b3",
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
];
  return (
    <div className=''>
      <Topbar/>
      <Navbar/>
      <Categories/>
      <Carousel/>
      <FeaturedProducts/>
      <AiImgCarousel/>
    </div>
  )
}

export default Home