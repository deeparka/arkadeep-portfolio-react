import React, { useState } from "react";
import { Link } from "react-router-dom";
import arkadeepImage from "../images/Arkadeep.jpg";
import {
  handleAboutClick,
  handleContactClick,
  handleSkillsClick,
} from "../lib/helper";
import MenuDrawer from "./MenuDrawer";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-customGrey font-bold flex justify-between items-center z-10 px-6 py-4 sm:py-6 sm:px-8 md:px-16 lg:px-100px">
      <div className="flex items-center">
        <img className="rounded-full h-9 w-9 mr-2" src={arkadeepImage} alt="" />
        <p className="animate-pulse sm:text-sm md:text-lg lg:font-bold">
          Arkadeep Prasad
        </p>
      </div>
      {!showMenu && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 sm:hidden block"
          onClick={handleMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}
      {showMenu && <RxCross1 className="w-6 h-6" onClick={handleMenu} />}
      {showMenu && <MenuDrawer />}
      <div className="hidden sm:flex">
        <Link to="/">
          <div className="transition ease-in-out delay-175 font-bold sm:mr-6 md:mr-10 md:cursor-pointer lg:mr-16 hover:scale-125 hover:tracking-wider">
            Home
          </div>
        </Link>
        <div
          className="transition ease-in-out delay-175 font-bold scroll-auto sm:mr-6 md:mr-10 md:cursor-pointer lg:mr-16 hover:scale-125 hover:tracking-wider"
          onClick={handleAboutClick}
        >
          About
        </div>
        <div
          className="transition ease-in-out delay-175 font-bold sm:mr-6 md:mr-10 md:cursor-pointer lg:mr-16 hover:scale-125 hover:tracking-wider"
          onClick={handleSkillsClick}
        >
          Skills
        </div>
        <Link to="/projects">
          <div className="transition ease-in-out delay-175 font-bold sm:mr-6 md:mr-10 md:cursor-pointer lg:mr-16 hover:scale-125 hover:tracking-wider">
            Project
          </div>
        </Link>
        <div
          className="transition ease-in-out delay-175 font-bold md:cursor-pointer hover:scale-125 hover:tracking-wider"
          onClick={handleContactClick}
        >
          Contact
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
