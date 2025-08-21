import React from 'react'
import Image from 'next/image'

const Categories = () => {
  const category = [
    {
      title: "Wedding Photography",
      categoryName: "wedding",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
    {
      title: "Kids Photography",
      categoryName: "kids",
      img: "https://images.unsplash.com/photo-1504151932400-72d4384f04b3",
    },
    {
      title: "Fashion Shoot",
      categoryName: "fashion",
      img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    },
    {
      title: "Product Photography",
      categoryName: "product",
      img: "https://images.unsplash.com/photo-1504151932400-72d4384f04b3",
    },
    {
      title: "Event Coverage",
      categoryName: "event",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
    {
      title: "Portraits",
      categoryName: "portraits",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
     {
      title: "Fashion Shoot",
      categoryName: "fashion",
      img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    },
    {
      title: "Product Photography",
      categoryName: "product",
      img: "https://images.unsplash.com/photo-1504151932400-72d4384f04b3",
    },
  ]

  return (
    <div className="flex justify-around gap-2 xl:gap-6 overflow-x-auto xl:p-4 p-0 mx-3 scrollbar-hide categories">
      {category.map((cat, index) => (
        <div key={index} className="flex flex-col items-center flex-shrink-0 w-23">
          <div className="relative w-16 xl:w-24 h-16 xl:h-24 rounded-full overflow-hidden border-1 border-gray-200 shadow-sm">
            <Image
              src={cat.img}
              alt={cat.title}
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-sm text-center w-20">{cat.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Categories
