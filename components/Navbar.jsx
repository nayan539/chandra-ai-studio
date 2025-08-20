import React from 'react'
import { FiSearch } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 p-3">
      <div className="flex justify-between items-center bg-white/0 backdrop-blur-sm border border-white/30 shadow-md h-14 xl:h-18 rounded-xl w-full px-4 xl:px-12">
        <div className="text-xl xl:text-2xl font-figtree">
          CHANDRA
        </div>
        <div>
          <ul className=" gap-10 hidden xl:flex">
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Contact Us</li>
          </ul>
        </div>
        <div className='flex gap-5 items-center'>
          <FiSearch className='text-2xl'/>
          <FiHeart className='text-2xl'/>
          <LuShoppingCart className='text-2xl'/>
          <LuUser className='text-2xl'/>

        </div>
      </div>
    </div>
  )
}

export default Navbar
