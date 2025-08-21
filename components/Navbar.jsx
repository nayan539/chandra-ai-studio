"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch, FiHeart } from "react-icons/fi";
import { LuUser, LuShoppingCart } from "react-icons/lu";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Shop", path: "/shop" },
  { title: "Services", path: "/services" },
  { title: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-3 z-50 p-3  backdrop-blur-lg border border-white/30 shadow-md rounded-xl m-3">
      <div className="flex justify-between items-center h-14 xl:h-14 w-full px-4 xl:px-12">
        {/* Logo */}
        <div className="text-xl xl:text-2xl font-figtree font-semibold">CHANDRA</div>

        {/* Navigation links */}
        <nav>
          <ul className="hidden xl:flex gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <li key={item.title} className="relative group">
                  <Link
                    href={item.path}
                    className={`transition-colors duration-300 ${
                      isActive ? "font-bold text-black" : "font-medium text-gray-700"
                    }`}
                  >
                    {item.title}
                  </Link>

                  {/* Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ease-out
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Icons */}
        <div className="flex gap-5 items-center">
          <FiSearch className="text-2xl cursor-pointer" />
          <FiHeart className="text-2xl cursor-pointer" />
          <LuShoppingCart className="text-2xl cursor-pointer" />
          <LuUser className="text-2xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
