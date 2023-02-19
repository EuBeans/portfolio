
import React from "react";
import {theme} from '../assets/theme';
export default function Dots() {

    const dots = () => {
        const radius = 4;
        const gap = 16;
        const width = 5;
        const height = 5;

        //function that create an SVG element with 5 by 5 dots in a grid, each dot is 8px in diameter with a 16px gap between them. This is done with a for loop and array
    
        // circle need to be gray
        const arr = []
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                arr.push(<circle style={{fill:theme.palette.primary.dark}} cx={i * (radius * 2 + gap) + radius} cy={j * (radius * 2 + gap) + radius} r={radius} />)
            }
        }
        return arr
    }

    return (
        <div className="dots">
            <svg width="100%" height="100%" viewBox="0 0 140 140" preserveAspectRatio="none">
                <g>
                    {dots()}
                </g>
            </svg>
        </div>
    )

}
