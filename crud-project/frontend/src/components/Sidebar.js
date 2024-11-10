import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-64 bg-blue-300 h-full p-4 pt-20 fixed">
      <ul>
        <li className="mb-6">
          <Link to="/" className="flex items-center space-x-3 hover:text-gray-300">
            <span>🏠</span>
            <span className="text-xl text-gray-700">Dashboard</span>
          </Link>
        </li>
        <li>
          <div
            className="flex items-center space-x-3 text-gray-700 hover:text-gray-300 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span>📁</span>
            <span className="text-xl">Menu</span>
          </div>
          {menuOpen && (
            <ul className="ml-6 mt-2">
              <li>
                <Link to="/users" className="text-gray-700 hover:text-gray-300 block py-2">
                  User List
                </Link>
              </li>
              <li>
                <Link to="/add" className="text-gray-700 hover:text-gray-300 block py-2">
                  Tambah User
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
