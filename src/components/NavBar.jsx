import React from "react";

const NavBar = () => {
    return (
        <nav className="flex py-5 justify-between">
            <h1 className="font-bold text-lg">Arkadeep Prasad</h1>
            <div className="flex">
                <div className="font-bold mr-10 cursor-pointer" onClick={()=> console.log('You clicked about')}>About</div>
                <div className="font-bold mr-10 cursor-pointer" onClick={()=> console.log('You clicked skills')}>Skills</div>
                <div className="font-bold mr-10 cursor-pointer" onClick={()=> console.log('You clicked project')}>Project</div>
                <div className="font-bold cursor-pointer" onClick={()=> console.log('You clicked contact')}>Contact</div>
            </div>
        </nav>
    );
};

export default NavBar
