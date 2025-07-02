import "../CSS/App.css";
import GradientText from "../Packages/GradientText/GradientText";
import React from "react";
import "../CSS/WelcomeText.css";
import "../CSS/FirstPart.css";


function OpenSourceWork() {
    return (

        <div className="text-wrapper">
            <div className="text-inner">
                <GradientText
                    colors={["#5f009c", "#d640ff", "#5f009c", "#d640ff", "#5f009c"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="">
                    We also Open Source some of our Work!
                </GradientText>
            </div>
        </div>


    );
}

export default OpenSourceWork;
