import { useState } from "react";
import { FaSearch, FaGlobe } from "react-icons/fa";
import "../App.css";

const Navbar = () => {
  const [isGameInfoOpen, setGameInfoOpen] = useState(false);
  const [isSocialsOpen, setSocialsOpen] = useState(false);

  return (
    <nav className="bg-black text-white flex items-center justify-between px-6 py-3">
      {/* Left Side - Riot Games & Valorant Logo */}
      <div className="flex items-center space-x-4">
        <img src="/riot-logo.png" alt="Riot Games" className="h-6" />
        <img src="/valorant-logo.png" alt="Valorant" className="h-6" />
      </div>

      {/* Center - Navigation Links */}
      <div className="flex space-x-6">
        {/* Game Info Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setGameInfoOpen(true)}
          onMouseLeave={() => setGameInfoOpen(false)}
        >
          <button className="hover:text-red-500">GAME INFO ▼</button>
          {isGameInfoOpen && (
            <div className="absolute top-full left-0 bg-gray-900 text-white p-3 rounded shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Agents
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Maps
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Weapons
              </a>
            </div>
          )}
        </div>

        <a href="#" className="hover:text-red-500">
          MEDIA
        </a>
        <a href="#" className="hover:text-red-500">
          NEWS
        </a>
        <a href="#" className="hover:text-red-500">
          SUPPORT
        </a>

        {/* Our Socials Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setSocialsOpen(true)}
          onMouseLeave={() => setSocialsOpen(false)}
        >
          <button className="hover:text-red-500">OUR SOCIALS ▼</button>
          {isSocialsOpen && (
            <div className="absolute top-full left-0 bg-gray-900 text-white p-3 rounded shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Twitter
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Instagram
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                YouTube
              </a>
            </div>
          )}
        </div>

        <a href="#" className="hover:text-red-500">
          ESPORTS
        </a>
        <a href="#" className="hover:text-red-500">
          PBE SIGNUP
        </a>
      </div>

      {/* Right Side - Search, Language, and Play Button */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
          <FaSearch className="text-white" />
        </button>
        <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
          <FaGlobe className="text-white" />
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          PLAY NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;