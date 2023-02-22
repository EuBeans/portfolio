
import React from "react";
import {theme} from '../../assets/theme';

// props type for the dots component
interface DotsProps {
    width: number;
    height: number;
    radius: number;
    gap: number;
    viewBox: string;
}

export default function Dots(props: DotsProps) {
    
    // props to var
    const {width, height, radius, gap, viewBox} = props;
    
    const dots = () => {


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
            <svg width="100%" height="100%" viewBox={viewBox} preserveAspectRatio="none">
                <g>
                    {dots()}
                </g>
            </svg>
        </div>
    )

}
