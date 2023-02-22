
import Box from "@mui/material/Box";
import React from "react";
import {theme} from '../../assets/theme';
import BoxArt from "./BoxArt";
import Dots from "./Dots";

// props type for the dots component
interface ImageProps {
    image: string;
    speed:number
}

export default function ImageBox(props: ImageProps) {
    
    // props to var
    const {image,speed} = props;

    const BoxStyle = {
        zIndex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        display: "inline-block",/* <= shrinks container to image size */
    }

    const imageBoxStyle = {
        zIndex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        display: "inline-block",/* <= shrinks container to image size */
    }

    const svgStyle = {
        position: 'absolute',
    }

    const profileImageBoxStyle = {
        display: "block",
        maxWidth: "90%",
        height: "auto",
    }

    const profileImageStyle = {
        display: "flex",
        maxWidth: "80%",
        height: "auto",
        //border bottom not solid dotted
        border: '1.5px dotted',
        borderColor: theme.palette.secondary.main,
    }
    
    const boxAsteticStyle = {
        border: '4px solid',
        borderColor: theme.palette.background.special,
        backgroundColor: 'transparent',
        position: 'absolute',
        padding: '0',
        margin: '0',
        width: '40%',
        height: '30%',
        zIndex: 1,
        overflow: 'hidden',
    }




    return (
        <Box sx={BoxStyle}>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'200px'} top={'3vh'} right= {'20%'} x={[0,0]} y={[0,0]} speed={speed}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'100px'} top={'66%'} right= {'62%'} x={[0,0]} y={[0,0]} speed={speed}/>
            <Box sx={imageBoxStyle}>
                <BoxArt box={"dot"} boxStyle={svgStyle} height= {'200px'} top={'65%'} left= {'60%'} x={[0,0]} y={[0,0]} speed={speed}>
                    <Dots  
                        radius = {3}
                        gap = {16}
                        width = {5}
                        height = {5}
                        viewBox = "0 0 200 200"
                    />
                </BoxArt>
                <Box sx={profileImageBoxStyle}>
                    <img style={profileImageStyle} src={image} alt="Jean" width="100%" />
                </Box>
            </Box>
        </Box>
    )

}
