import React from "react";
import "./hardware.css"

const CurvedLine: React.FC = () => {
    return (
        <svg width="1414" height="566" viewBox="0 0 1414 566" fill="none" xmlns="http://www.w3.org/2000/svg"
             className="curved-line">
            <path id="line2"
                  d="M1413.5 564.261H757.497C745.263 564.261 735.379 554.279 735.498 542.046L740.698 10.088C740.747 5.08325 736.704 1 731.699 1H0.499676"
                stroke="url(#paint0_linear_873_9084)" strokeWidth="2"/>
            <defs>
                <linearGradient id="paint0_linear_873_9084" x1="1220.8" y1="496.78" x2="79.9116" y2="448.221"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ED89E4"/>
                    <stop offset="1" stopColor="#69FCCF" stopOpacity="0.09"/>
                </linearGradient>
            </defs>
            <circle r="6" fill="white">
                <animateMotion repeatCount="indefinite" dur="10s">
                    <mpath href="#line2"/>
                </animateMotion>
            </circle>
        </svg>
    );
};

export default CurvedLine;