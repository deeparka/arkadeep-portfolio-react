import React from "react";
import image from "../images/Arkadeep-top-right.png";
import imageTwo from "../images/Arkadeep-about.png";
import figma from "../images/Figma-logo.svg";
import html from "../images/html.png";
import css from "../images/css.png";
import sass from "../images/sass.png";
import tailwind from "../images/tailwind.png";
import js from "../images/js.png";
import react from "../images/react.png";
import gmail from "../images/gmail.png";
import phone from "../images/phone.png";
import linkedin from "../images/linkedin.png";
import vector from "../images/footer-vector.png";
import github from "../images/github.png";

import { ProgressBar } from "./ProgressBar";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export const Home = () => {
    const progressBarColorOne = "#541212";
    const progressBarColorTwo = "#981D1D";

    return (
        <div className="home">
            {/* Designation Headline with Image */}
            <div className="description-img">
                <div className="left-description">
                    <div className="hello-name">
                        Hello, my name is Arkadeep Prasad
                    </div>
                    <div className="designation">
                        I’m an UI/UX & Front-End Designer
                    </div>
                </div>
                <div className="right-image">
                    <img src={image} alt="Arkadeep.png" />
                </div>
            </div>

            {/* About me */}
            <div className="about-img">
                <div className="img-arka">
                    <img src={imageTwo} alt="About.png" />
                </div>
                <div className="about">
                    <div className="about-me">About me</div>
                    <div className="about-me-description">
                        <span>
                            Hello there, I’m <span>Arkadeep Prasad</span>.
                        </span>{" "}
                        I’m a self-taught UI/UX & Front-End Designer from West
                        Bengal, India. I follow my passion for designing & also
                        find it very interesting & enjoyable. I am passionate
                        about learning new technologies. I am always keen to
                        work and experience things.
                    </div>
                    <button className="btn-resume" type="button">
                        Resume
                    </button>
                </div>
            </div>

            {/* Skills */}
            <div className="skillset">
                <div className="skillset-headline">
                    Technologies I’ve worked with
                </div>
                <div className="skillset-description">
                    I have been working with Figma, HTML, CSS & JS for almost 5
                    months on my personal projects. I have woked with frameworks
                    like Tailwind CSS, React.js & Extensions like SCSS. I also
                    have the knowledge about Wireframing, Prototype etc. in
                    Figma.
                </div>
                {/* 1st Row - Figma, HTML, CSS */}
                <div className="figma-html-css">
                    {/* Figma */}
                    <div className="figma">
                        <div className="figma-icon">
                            <img
                                src={figma}
                                alt="Figma"
                                className="figma-img"
                            />
                        </div>
                        <div className="figma-progress-bar">
                            <ProgressBar
                                backgroundColorOne={progressBarColorOne}
                                backgroundColorTwo={progressBarColorTwo}
                                progressValue={70}
                                height={18.09}
                            />{" "}
                        </div>
                        <div className="figma-progress">70%</div>
                    </div>
                    {/* Html */}
                    <div className="html">
                        <div className="html-icon">
                            <img src={html} alt="Html" className="html-img" />
                        </div>
                        <div className="html-progress-bar">
                            <ProgressBar
                                backgroundColorOne={progressBarColorOne}
                                backgroundColorTwo={progressBarColorTwo}
                                progressValue={70}
                                height={18.09}
                            />{" "}
                        </div>
                        <div className="html-progress">70%</div>
                    </div>
                    {/* CSS */}
                    <div className="css">
                        <div className="css-icon">
                            <img src={css} alt="CSS" className="css-img" />
                        </div>
                        <div className="css-progress-bar">
                            <ProgressBar
                                backgroundColorOne={progressBarColorOne}
                                backgroundColorTwo={progressBarColorTwo}
                                progressValue={70}
                                height={18.09}
                            />{" "}
                        </div>
                        <div className="css-progress">70%</div>
                    </div>
                </div>
                {/* 2nd Row - Sass, Tailwind, JS */}
                <div className="sass-tailwind-js">
                    {/* Sass */}
                    <div className="sass">
                        <div className="sass-icon">
                            <img src={sass} alt="Sass" className="sass-img" />
                        </div>
                        <div className="sass-progress-bar">
                            <ProgressBar
                                backgroundColorOne={progressBarColorOne}
                                backgroundColorTwo={progressBarColorTwo}
                                progressValue={70}
                                height={18.09}
                            />{" "}
                        </div>
                        <div className="sass-progress">70%</div>
                    </div>
                    {/* Tailwind CSS */}
                    <div className="tailwind">
                        <div className="tailwind-icon">
                            <img
                                src={tailwind}
                                alt="Tailwind CSS"
                                className="tailwind-img"
                            />
                        </div>
                        <div className="tailwind-progress-bar">
                            <ProgressBar
                                backgroundColorOne={progressBarColorOne}
                                backgroundColorTwo={progressBarColorTwo}
                                progressValue={70}
                                height={18.09}
                            />{" "}
                        </div>
                        <div className="tailwind-progress">70%</div>
                    </div>
                    {/* JS */}
                    <div className="js">
                        <div className="js-icon">
                            <img src={js} alt="Javascript" className="js-img" />
                        </div>
                        <div className="js-progress-bar">
                            <ProgressBar
                                backgroundColorOne={progressBarColorOne}
                                backgroundColorTwo={progressBarColorTwo}
                                progressValue={40}
                                height={18.09}
                            />{" "}
                        </div>
                        <div className="js-progress">40%</div>
                    </div>
                </div>
                {/* 3rd Row - React */}
                {/* React */}
                <div className="react">
                    <div className="react-icon">
                        <img src={react} alt="React.JS" className="react-img" />
                    </div>
                    <div className="react-progress-bar">
                        <ProgressBar
                            backgroundColorOne={progressBarColorOne}
                            backgroundColorTwo={progressBarColorTwo}
                            progressValue={40}
                            height={18.09}
                        />{" "}
                    </div>
                    <div className="react-progress">40%</div>
                </div>
            </div>
            {/* Take a Look at Work */}
            <div className="check-out">
                <p className="take-a-look">Take a look at my works</p>
                <div className="div-btn-click-here">
                    <button type="button" className="btn-click-here">
                        Click Here
                    </button>
                </div>
            </div>
            {/* Connect with me */}
            <div className="connection">
                <div className="connection-headline">Connect with me?</div>
                <div className="connection-applications">
                    {/* Gmail */}
                    <div className="gmail">
                        <img src={gmail} alt="Gmail" className="gmail-img" />
                        <div className="gmail-id">arkadeep180@gmail.com</div>
                    </div>
                    {/* Phone */}
                    <div className="phone">
                        <img src={phone} alt="Phone" className="phone-img" />
                        <div className="phone-number">+919593527725</div>
                    </div>
                    {/* LinkedIn */}
                    <div className="linkedin">
                        <img
                            src={linkedin}
                            alt="LinkedIn"
                            className="linkedin-img"
                        />
                        <a href="https://www.linkedin.com/in/arkadeep-prasad-1b5074201/">
                            Arkadeep Prasad
                        </a>
                    </div>
                    {/* GitHub */}
                    <div className="github">
                        <img src={github} alt="Github" className="github-img" />
                        <a
                            href="https://github.com/deeparka"
                            className="github-id"
                        >
                            deeparka
                        </a>
                    </div>
                </div>
            </div>
            {/* Message Form */}
            <form action="">
                <div className="form-title">
                    <h1>Send a message</h1>
                    <div className="underline"></div>
                </div>
                <section className="name">
                    <label className="name-label">Name</label>
                    <input type="text" required className="input-name" />
                </section>
                <section className="email">
                    <label className="gmail-label">Gmail</label>
                    <input type="email" required className="input-gmail" />
                </section>
                <section className="message">
                    <label className="message-label">Message</label>
                    <input type="text" required className="input-messsage" />
                </section>
                <button type="submit">Send</button>
            </form>
            {/* Footer Section */}
            <footer>
                <div className="footer-icons">
                    <div className="github-footer">
                        <FaGithubSquare />
                    </div>
                    <div className="linkedin-footer">
                        <FaLinkedin />
                    </div>
                    <div className="email-footer">
                        <MdOutlineMailOutline />
                    </div>
                </div>
                <p className="copyright">copyright@Arkadeep 2022</p>
                <div className="footer-vector">
                    <img src={vector} alt="footer-vector" />
                </div>
            </footer>
        </div>
    );
};
