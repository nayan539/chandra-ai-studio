import React from 'react'

const FeaturedProducts = () => {
  return (
    <div>
      <div className='m-3 rounded-xl pb-3'>
        <div className='py-3'><h1 className='text-4xl text-center mb-3'>Featured Products</h1></div>
      <div className='grid grid-cols-12 gap-3 px-3'>
          <div className="col-span-6 md:col-span-4 xl:col-span-3 h-52 xl:h-84 rounded-xl bg-gray-500">ds</div>
          <div className="col-span-6 md:col-span-4 xl:col-span-3 h-52 xl:h-84 rounded-xl bg-gray-500">ds</div>
          <div className="col-span-6 md:col-span-4 xl:col-span-3 h-52 xl:h-84 rounded-xl bg-gray-500">d</div>
          <div className="col-span-6 md:col-span-4 xl:col-span-3 h-52 xl:h-84 rounded-xl bg-gray-500">d</div>
      </div>
      </div>
    </div>
  )
}

export default FeaturedProducts