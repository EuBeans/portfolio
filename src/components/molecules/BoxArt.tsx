import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { theme } from '../../assets/theme';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface BoxArtProps {
    children?: React.ReactNode;
    width?: string;
    height?: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    x?: number[];
    y?: number[];
    speed?: number;
    box: "box" | "dot"| "ascii";
    boxStyle?: {};
    className?: string;
}


const BoxArt = (props:BoxArtProps) => {
    const [ref, inView] = useInView();
    const control = useAnimation();
    const {box,children, width, height, top, right, bottom, left,x,y,speed,boxStyle, className} = props;

    useEffect(() => {

        //check if reload is true, if it is false or undefined, then the box will not  be hidden when it is not in view
        if(inView){
            control.start({ opacity: 1,x: x, y:y,transition: { duration: speed }})
        }
        else{
            control.start({ opacity: 0, display: "hidden" })
        }
      }, [control, inView, speed, x, y]);


    const boxAsteticStyle = {
        border: '1px solid',
        display: 'inline-flex',
        borderColor: theme.palette.background.secondary,
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 1,
        overflow: 'hidden',
        boxSizing: 'border-box',
    }
    const dotAsteticStyle = {
        borderColor: theme.palette.background.secondary,
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 1,
        overflow: 'hidden',
        boxSizing: 'border-box',
    }
    const asciiArtBoxStyle = {
        display: 'inline-flex',
        backgroundColor: 'transparent',
        position: 'absolute',
        padding: '0',
        margin: '0',
        overflow: 'hidden',
        boxSizing: 'border-box',
    }
    const sizeStyle = {
        width: width,
        height: height,
        minWidth: width,
        minHeight: height,
        top: top,
        right: right,
        bottom: bottom,
        left: left
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 100, display: "hidden" }}
            animate={control}
            
        >
            <Box ref={ref} className={className} sx={[
                boxStyle ? boxStyle : box === "box" ? boxAsteticStyle : box === "dot" ? dotAsteticStyle : asciiArtBoxStyle,
                sizeStyle
            ]}>
                {children}
            </Box>
        </motion.div>
        
    );
}
export default BoxArt;
