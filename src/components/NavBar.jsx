import React, { useState } from "react";
import { Link } from "react-router-dom";
import arkadeepImage from '../images/Arkadeep.jpg'
import { handleAboutClick, handleContactClick, handleSkillsClick } from "../lib/helper";
import MenuDrawer from "./MenuDrawer";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)

    function handleMenu() {
        showMenu ? setShowMenu(false) : setShowMenu(true)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 bg-customGrey font-bold flex justify-between items-center z-10 px-6 py-4 sm:py-6 sm:px-8 md:px-16 lg:px-100px">
            <div className="flex items-center">
                <img className="rounded-full h-9 w-9 mr-2" src={arkadeepImage} alt="" />
                <p className="lg:font-bold sm:text-sm md:text-lg">Arkadeep Prasad</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:hidden block cursor-pointer" onClick={handleMenu}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            {showMenu && <MenuDrawer />}
            <div className="hidden sm:flex">
                <Link to='/'>
                    <div className="font-bold sm:mr-6 md:mr-10 md:cursor-pointer lg:mr-16" >Home</div>
                </Link>
                <div className="font-bold scroll-auto sm:mr-6 md:mr-10 md:cursor-pointer lg:mr-16" onClick={handleAboutClick}>About</div>
                <div className="font-bold sm:mr-6 md:mr-10 md:cursor-pointer lg:mr-16" onClick={handleSkillsClick}>Skills</div>
                <Link to='/projects'>
                    <div className="font-bold sm:mr-6 md:mr-10 md:cursor-pointer lg:mr-16"  >Project</div>
                </Link>
                <div className="font-bold md:cursor-pointer" onClick={handleContactClick}>Contact</div>
            </div>
        </nav>
    );
};

export default NavBar
