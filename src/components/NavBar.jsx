import React from "react";

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="name">Arkadeep Prasad</div>
                <div className="right-nav">
                    <span className="about">About</span>
                    <span className="skills">Skills</span>
                    <span className="project">Project</span>
                    <span className="contact">Contact</span>
                </div>
            </div>
        </nav>
    );
};
