import React from "react";
import image from "../images/Arkadeep-top-right.png";

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
        </div>
    );
};
