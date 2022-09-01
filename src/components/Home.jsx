import React from "react";
import image from "../images/Arkadeep-top-right.png";
import imageTwo from "../images/Screenshot from 2022-09-01 22-40-58.png";

export const Home = () => {
    return (
        <div className="home">
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
        </div>
    );
};
