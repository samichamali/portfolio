import ImageTrail from "../../Packages/ImageTrail/ImageTrail"
import React from "react";

function ImagesFunc() {
    return (
        <div className="image-trail-container">
            {/* Overlay content */}
            <div className="overlay">
                <div className="overlay-left">
                    <h3>I'm a Software Engineer 👨‍💻</h3>
                    <p style={{fontSize: '2rem'}}>
                        I have gone through quite a lot of ups and downs to reach the spot I'm in today, from changing ideas lots of times, working with multiple startups, building lots of apps and platforms, and showcasing work in Tech Expos, I have definitely been in the game for quite a bit.
                    </p>

                </div>
                <div className="overlay-right">
                    <img
                        src="/whitelogo.png"
                        alt="Gallery Preview"
                        className="overlay-image"
                        style={{width: "500px", height: "auto"}}
                    />

                </div>
            </div>

            {/* ImageTrail behind */}
            <ImageTrail
                key={0}
                items={[
                    '/Images/grind1.jpg',
                    '/Images/grind2.jpg',
                    '/Images/grind3.jpg',
                    '/Images/grind4.jpeg',
                    '/Images/grind5.jpg',
                    '/Images/grind6.jpg',
                ]}
                variant={7}
            />
        </div>


    );
}

export default ImagesFunc;
