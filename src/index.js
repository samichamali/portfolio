import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import './CSS/Fonts.css';
import AuroraSet from './Segments/AuroraSet';
import WelcomeText from "./Segments/WelcomeText";
import FirstPart from "./Segments/FirstPartSegments/FirstPart";
import Waves from './Packages/Waves/Waves';
import CompaniesList from "./Segments/WorkedWith/CompaniesList";
import OpenSourceWork from "./Segments/Github";
import ShinyText from "./Packages/ShinyText/ShinyText";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Waves
            lineColor="rgba(255, 255, 255, 0.2)"
            backgroundColor="rgba(255, 255, 255, 0)"
            waveSpeedX={0.03}
            waveSpeedY={0.03}
            waveAmpX={30}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
        />
        <AuroraSet/>
        <WelcomeText/>
        <FirstPart/>
        <CompaniesList/>
        <div className="text-wrapper">
            <div className="text-inner">
                <ShinyText
                    text="Wanna learn more about me? Well, here's my CV!"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                />
            </div>
        </div>
        <div
            style={{
                padding: '0 2rem',
                marginTop: '2rem',
            }}
        >
            <iframe
                src="Images/CV.pdf"
                style={{
                    width: '100%',
                    height: 'calc(100vh - 150px)', // Adjust based on header or GradientText height
                    border: 'none',
                    borderRadius: '16px',
                    boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                }}
                title="Open Source Frame"
            ></iframe>
        </div>
        <div className="text-wrapper">
            <div className="text-inner">
                <ShinyText
                    text="Thanks for viewing my portfolio!"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                />
            </div>
        </div>
    </React.StrictMode>
);
