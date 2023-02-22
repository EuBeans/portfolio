import Box from '@mui/material/Box';
import react, { useEffect } from 'react';
import { theme } from '../../assets/theme';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from 'react';
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
}


const BoxArt = (props:BoxArtProps) => {
    const [ref, inView] = useInView();
    //state
    const [stateTyper, setstateTyper] = React.useState(0);
    const control = useAnimation()
    const {box,children, width, height, top, right, bottom, left,x,y,speed,boxStyle} = props;

    useEffect(() => {

        //check if reload is true, if it is false or undefined, then the box will not  be hidden when it is not in view
        if(inView){
            control.start({ opacity: 1,x: x, y:y,transition: { duration: speed }})
        }
        else{
            control.start({ opacity: 0, display: "hidden" })
        }
      }, [inView]);


    const boxAsteticStyle = {
        border: '1px solid',
        display: 'inline-flex',
        borderColor: theme.palette.background.secondary,
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 1,
        overflow: 'hidden',
    }
    const dotAsteticStyle = {
        borderColor: theme.palette.background.secondary,
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 1,
        overflow: 'hidden',
    }
    const asciiArtBoxStyle = {
        display: 'inline-flex',
        backgroundColor: 'transparent',
        position: 'absolute',
        padding: '0',
        margin: '0',
        overflow: 'hidden',
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 100, display: "hidden" }}
            animate={control}
            
        >
            <Box ref={ref} sx={[boxStyle? boxStyle :box === "box"?boxAsteticStyle: box=="dot"? dotAsteticStyle : asciiArtBoxStyle ,{width: width, height: height, top: top, right: right, bottom: bottom, left:left }]}>
                {children}
            </Box>
        </motion.div>
        
    );
}
export default BoxArt;