import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const TopBar = () => {
  return (
    <div className="text-white bg-rabbit-red">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        <div className="items-center hidden space-x-4 md:flex">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="w-4 h-4" />
          </a>
        </div>
        <div className="flex-grow text-sm text-center">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>
        <div className="hidden text-sm md:block">
          <a href="tel:+1234567890" className="hover:text-gray-300">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
