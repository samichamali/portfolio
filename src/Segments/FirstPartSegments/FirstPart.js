import "../../CSS/App.css";
import ScrollVelocity from "../../Packages/ScrollVelocity/ScrollVelocity";
import React from "react";
import "../../CSS/FirstPart.css";
import ImagesFunc from "./SelfExplanation"
import ShinyText from "../../Packages/ShinyText/ShinyText";



function FirstPart() {
    return (
        <div>
            <div className="first-part-container">
                <ScrollVelocity
                    texts={['Your Vision - My Code. Your Vision - My Code.', 'From Dubai 🇦🇪 to Berlin 🇩🇪 ']}
                    velocity={100}
                    className="first-part-container"
                />
                <ImagesFunc/>
            </div>
            <div className="text-wrapper">
                <div className="text-inner">
                    <ShinyText
                        text="I have worked with Engineering Firms, Driving Schools, AI Platforms, you name it."
                        disabled={false}
                        speed={3}
                        className="custom-class"
                    />
                </div>
            </div>
        </div>
    );
}

export default FirstPart;
