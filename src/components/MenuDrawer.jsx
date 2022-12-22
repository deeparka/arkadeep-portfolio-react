import React from "react";
import { Link } from "react-router-dom";
import {
  handleAboutClick,
  handleContactClick,
  handleSkillsClick,
} from "../lib/helper";

function MenuDrawer() {
  return (
    <div
      id="drawer-example"
      className="fixed top-68px left-0 z-40 h-auto px-11 py-6 overflow-y-auto bg-customDrawerGrey w-full text-customWhite border-t-customBlack border-t-2"
    >
      <Link to="/">
        <p className="text-xl font-semibold py-2">Home</p>
      </Link>
      <hr className="mb-1" />
      <p className="text-xl font-semibold py-2" onClick={handleAboutClick}>
        About
      </p>
      <hr className="mb-1" />
      <p className="text-xl font-semibold py-2" onClick={handleSkillsClick}>
        Skills
      </p>
      <hr className="mb-1" />
      <Link to="/projects">
        <p className="text-xl font-semibold py-2">Project</p>
      </Link>
      <hr className="mb-1" />
      <p className="text-xl font-semibold py-2" onClick={handleContactClick}>
        Contact
      </p>
    </div>
  );
}

export default MenuDrawer;
