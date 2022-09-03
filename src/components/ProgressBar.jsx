import React from "react";

export const ProgressBar = ({
    backgroundColorOne,
    backgroundColorTwo,
    progressValue,
    height,
}) => {
    const parentBar = {
        height: height,
        width: "228.85px",
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
