import React from "react";
import arkadeepImage from '../images/Arkadeep.jpg'

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-customGrey flex py-6 justify-between items-center px-26">
            <div className="flex items-center">
                <img className="rounded-full h-9 w-9 mr-2" src={arkadeepImage} alt="" />
                <h1 className="font-bold text-lg">Arkadeep Prasad</h1>
            </div>
            <div className="flex">
                <div className="font-bold mr-16 cursor-pointer" onClick={()=> console.log('You clicked about')}>About</div>
                <div className="font-bold mr-16 cursor-pointer" onClick={()=> console.log('You clicked skills')}>Skills</div>
                <div className="font-bold mr-16 cursor-pointer" onClick={()=> console.log('You clicked project')}>Project</div>
                <div className="font-bold cursor-pointer" onClick={()=> console.log('You clicked contact')}>Contact</div>
            </div>
        </nav>
    );
};

export default NavBar
