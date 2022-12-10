import React from "react";

const ProgressBar = ({
    backgroundColorOne,
    backgroundColorTwo,
    progressValue,
    height,
    width
}) => {
    const parentBar = {
        height: height,
        width: "200px",
        backgroundColor: backgroundColorOne,
        borderRadius: 40,
        // margin: 50,
    };

    const childBar = {
        height: height,
        width: `${progressValue}%`,
        backgroundColor: backgroundColorTwo,
        borderRadius: 40,
    };

    return (
        <div style={parentBar}>
            <div style={childBar}></div>
        </div>
    );
};

export default ProgressBar