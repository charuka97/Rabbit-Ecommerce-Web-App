import React from "react";
import TopBar from "../Layout/TopBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-200">
      {/* TopBar */}
      <TopBar />
      {/* NavBar */}
      <NavBar />
      {/* Cart Drawer */}
    </header>
  );
};

export default Header;
