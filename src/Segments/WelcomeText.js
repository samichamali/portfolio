import "../CSS/App.css";
import BlurText from "../Packages/BlurText/BlurText";
import React from "react";
import "../CSS/WelcomeText.css";
const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

function WelcomeText() {
    return (
        <div className="center-container">
            <BlurText
                text="CHEMALI"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-2xl mb-8"
            />
            </div>
    );
}

export default WelcomeText;
