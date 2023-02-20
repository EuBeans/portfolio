import { Box, Container } from '@mui/material';
import React from 'react';
import { theme } from '../assets/theme';

import AsciiArt from './AsciiArt';
import Dots from './Dots';

export default function BackgroundArt() {

    const containerStyle = {
        position: 'relative',
    }


    const boxAsteticStyle = {
        border: '1px solid',
        borderColor: theme.palette.background.special,
        backgroundColor: 'transparent',
        position: 'absolute',
        padding: '0',
        margin: '0',
        width: '10%',
        overflow: 'hidden',
    }

    const asciiArtBoxStyle = {
        backgroundColor: 'transparent',
        position: 'absolute',
        padding: '0',
        margin: '0',
        overflow: 'hidden',
    }

    return (
        <Box sx={[containerStyle]}>
            <Box sx={[boxAsteticStyle,{top: '70vh', right: '95%',height: '100px',}]}/>
            <Box sx={[boxAsteticStyle,{top: '30vh', left: '95%',height: '200px',}]}/>
            <Box sx={[asciiArtBoxStyle,{top: '60vh', left: '85%', height:"100 px "}]}>
                <AsciiArt type={"keyboard"} fontSize={theme.typography.h4.fontSize}/>
            </Box>
            <Box sx={[asciiArtBoxStyle,{top: '98vh', right: '85%', height:"100px "}]}>
                <Dots  
                    radius = {2}
                    gap = {16}
                    width = {5}
                    height = {5}
                    viewBox = "25 0 300 300"
                />
            </Box>
            <Box sx={[boxAsteticStyle,{top: '100vh', left: '98%',height: '80px',}]}/>
        </Box>
    )
}