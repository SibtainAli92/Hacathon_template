"use client";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white text-black p-4 md:p-8 max-w-[1440px] mx-auto ">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center w-10 h-10 text-black bg-gray-200 rounded focus:outline-none hover:bg-gray-300 md:hidden"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-extrabold font-Poppins">
          SHOP.CO
        </h1>

        {/* Navigation Links */}
        <nav
          className={`hidden md:flex space-x-8 ${
            menuOpen ? "flex" : "hidden"
          } md:space-x-8`}
        >
          <Link href="/" className="text-lg hover:text-[#504f4d] hover:underline">
            Shop
          </Link>
          <Link href="/about" className="text-lg hover:text-[#504f4d] hover:underline">
            On Sale
          </Link>
          <Link href="/project" className="text-lg hover:text-[#504f4d] hover:underline">
            New Arrivals
          </Link>
          <Link href="/contact" className="text-lg hover:text-[#504f4d] hover:underline">
            Brand
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="flex items-center w-full max-w-[400px]">
          {/* Full search bar for medium+ screens */}
          <div className="hidden md:flex items-center h-10 bg-[#F5F5F5] rounded-full overflow-hidden w-full">
            <label htmlFor="Search-bar" className="flex items-center w-full">
              <BsSearch className="text-2xl ml-4" />
              <input
                type="text"
                placeholder="Search for Product..."
                id="Search-bar"
                className="flex-grow outline-none placeholder:text-lg bg-transparent py-2 px-4"
              />
            </label>
          </div>
          {/* Search icon for small screens */}
          <button className="flex md:hidden items-center justify-center w-10 h-10 text-black bg-gray-200 rounded-full hover:bg-gray-300">
            <BsSearch className="text-xl" />
          </button>
        </div>

        {/* User Icon */}
        <Image
          src="/Frame.png"
          alt="frame"
          width={50}
          height={50}
          className="ml-4"
        />
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {menuOpen && (
        <div className="flex flex-col items-center space-y-2 bg-white p-4 md:hidden">
          <Link href="/" className="text-black">
            Shop
          </Link>
          <Link href="/about" className="text-black">
            On Sale
          </Link>
          <Link href="/project" className="text-black">
            New Arrivals
          </Link>
          <Link href="/contact" className="text-black">
            Brand
          </Link>
        </div>
      )}
    </div>
  );
}
