import React from "react";
import Container from "@mui/material/Container";

const AnimatedLine: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{
            height: { lg:370,  md:160, sm:120, xs:120 },
            display: 'flex',
            alignItems: 'flex-end',
        }}>
        <svg width="1000" height="80" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="paint0_linear" x1="8" y1="13.5" x2="1278.01" y2="13.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF37FC" stopOpacity="0.1" />
                    <stop offset="0.52" stopColor="#FF37FC" />
                    <stop offset="1" stopColor="#992197" stopOpacity="0.1" />
                </linearGradient>
            </defs>
            <path id="line1" d="M8 12.5 H1278.01" stroke="url(#paint0_linear)" strokeOpacity="0.65" />
            <circle r="4" fill="white">
                <animateMotion repeatCount="indefinite" dur="6s">
                    <mpath href="#line1" />
                </animateMotion>
            </circle>
        </svg>
        </Container>
    );
};

export default AnimatedLine;
