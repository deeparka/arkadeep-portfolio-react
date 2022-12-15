// import { Drawer } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import arkadeepImage from '../images/Arkadeep.jpg'

const NavBar = () => {
    function handleMenu() {
        console.log("you clicked me")
    }

    function handleAboutClick(e) {
        const about = document.querySelector('#about')
        about.scrollIntoView({ behavior: 'smooth', block: 'center' })
        e.preventDefault()
    }

    function handleSkillsClick(e) {
        const skills = document.querySelector('#skills')
        skills.scrollIntoView({ behavior: 'smooth', block: 'center' })
        e.preventDefault()
    }

    function handleContactClick(e) {
        const contact = document.querySelector('#contact')
        contact.scrollIntoView({ behavior: 'smooth', block: 'center' })
        e.preventDefault()
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
            <div className="hidden sm:flex">
                <Link to='/'>
                    <div className="font-bold sm:mr-6 md:mr-10 md:cursor-pointer lg:mr-16" onClick= {()=> console.log('You clicked about')}>Home</div>
                </Link>
                <div className="font-bold scroll-auto sm:mr-6 md:mr-10 md:cursor-pointer lg:mr-16" onClick={handleAboutClick}>About</div>
                <div className="font-bold sm:mr-6 md:mr-10 md:cursor-pointer lg:mr-16" onClick={handleSkillsClick}>Skills</div>
                <Link to='/projects'>
                    <div className="font-bold sm:mr-6 md:mr-10 md:cursor-pointer lg:mr-16"  onClick={()=> console.log('You clicked project')}>Project</div>
                </Link>
                <div className="font-bold md:cursor-pointer" onClick={handleContactClick}>Contact</div>
            </div>
        </nav>
    );
};

export default NavBar
