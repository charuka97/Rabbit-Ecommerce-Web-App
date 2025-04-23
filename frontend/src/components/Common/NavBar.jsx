import React, { useState } from "react";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CardDrawer from "../Layout/CardDrawer";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawerOpen = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCartDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav className="container flex items-center justify-between px-6 py-4 mx-auto">
        {/* Logo section */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabitt
          </Link>
        </div>
        {/* Menu Section */}
        <div className="hidden space-x-6 md:flex">
          <Link
            to="#"
            className="text-sm font-medium text-gray-400 uppercase hover:text-black"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-sm font-medium text-gray-400 uppercase hover:text-black"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-sm font-medium text-gray-400 uppercase hover:text-black"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-sm font-medium text-gray-400 uppercase hover:text-black"
          >
            Bottom Wear
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 ">
          {/* Profile Icon */}
          <Link to="/profile" className="hover:text-black ">
            <HiOutlineUser className="w-6 h-6 text-gray-700" />
          </Link>

          {/* Cart Icon */}
          <button
            onClick={toggleCartDrawerOpen}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>

          {/* Search Icon */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          {/* Mobile Hamburger Icon */}
          <button onClick={toggleNavDrawerOpen} className="md:hidden">
            <HiBars3BottomRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Card Drawer */}
      <CardDrawer
        drawerOpen={drawerOpen}
        toggleCartDrawerOpen={toggleCartDrawerOpen}
      />

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawerOpen}>
            <IoMdClose className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="mb-4 text-xl font-semibold">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={toggleNavDrawerOpen}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawerOpen}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawerOpen}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawerOpen}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
