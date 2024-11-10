import React from "react";

const Header = ({ userName }) => (
  <header className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center shadow-md fixed w-full z-10">
    <div className="flex items-center space-x-4">
      <div className="w-8 h-8 bg-white rounded-full"></div>
      <span className="text-xl font-semibold">Tema Website | Application &gt; Menu</span>
    </div>
    <div className="flex items-center">
      <span className="mr-3">{userName}</span>
      <div className="w-8 h-8 bg-white rounded-full"></div>
    </div>
  </header>
);

export default Header;
