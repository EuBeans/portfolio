import React from 'react';
import { Box} from '@mui/material';
import { theme } from '../../assets/theme';
import AsciiArt from './AsciiArt';
import Dots from './Dots';
import BoxArt from './BoxArt';

export default function BackgroundArt() {
    const SPEED= 1.5;
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
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'200px'} top={'30vh'} left= {'95%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'100px'} top={'70vh'} right= {'95%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'80px'} top={'100vh'} left= {'98%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'100px'} top={'150vh'} right= {'98%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'150px'} top={'170vh'} left= {'90%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'100px'} top={'270vh'} left= {'97%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'130px'} top={'300vh'} right= {'94%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'200px'} top={'350vh'} left= {'93%'} x={[0,0]} y={[0,0]} speed={SPEED}/>\
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'100px'} top={'410vh'} right= {'92%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'70px'} top={'450vh'} left= {'93%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'140px'} top={'510vh'} right= {'96%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'100px'} top={'570vh'} left= {'95%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'70px'} top={'630vh'} right= {'95%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'100px'} top={'690vh'} left= {'98%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'100px'} top={'750vh'} right= {'98%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'150px'} top={'770vh'} left= {'90%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'100px'} top={'870vh'} left= {'97%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'130px'} top={'900vh'} right= {'94%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'200px'} top={'950vh'} left= {'93%'} x={[0,0]} y={[0,0]} speed={SPEED}/>\
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'100px'} top={'1010vh'} right= {'92%'} x={[0,0]} y={[0,0]} speed={SPEED}/>

            <BoxArt box={"dot"} boxStyle={asciiArtBoxStyle} height= {'100px'} top={'98vh'} right= {'85%'} x={[0,0]} y={[0,0]} speed={SPEED}>
                <Dots  
                    radius = {2}
                    gap = {16}
                    width = {5}
                    height = {5}
                    viewBox = "25 0 300 300"
                />
            </BoxArt>
            <BoxArt box={"dot"} boxStyle={asciiArtBoxStyle} height= {'100px'} top={'340vh'} right= {'85%'} x={[0,0]} y={[0,0]} speed={SPEED}>
                <Dots  
                    radius = {2}
                    gap = {16}
                    width = {5}
                    height = {5}
                    viewBox = "10 0 300 300"
                />
            </BoxArt>
            <BoxArt box={"dot"} boxStyle={asciiArtBoxStyle} height= {'100px'} top={'140vh'} left= {'95%'} x={[0,0]} y={[0,0]} speed={SPEED}>
                <Dots  
                    radius = {2}
                    gap = {16}
                    width = { 7}
                    height = {7}
                    viewBox = "0 0 100 100"
                />
            </BoxArt>
            <BoxArt box={"dot"} boxStyle={asciiArtBoxStyle} height= {'100px'} top={'600vh'} left= {'95%'} x={[0,0]} y={[0,0]} speed={SPEED}>
                <Dots
                    radius = {2}
                    gap = {16}
                    width = { 7}
                    height = {7}
                    viewBox = "0 0 100 100"
                />
            </BoxArt>

            
            
        
            <BoxArt box={"ascii"}  boxStyle={asciiArtBoxStyle}  height= {'200px'} top={'60vh'} left= {'85%'} x={[0,0]} y={[0,0]} speed={SPEED}>
                <AsciiArt type={"keyboard"} fontSize={theme.typography.h4.fontSize}/>
            </BoxArt>
            <BoxArt box={"ascii"}  boxStyle={asciiArtBoxStyle} height= {'400px'} top={'210vh'} right= {'92%'}  x={[0,0]} y={[0,0]} speed={SPEED}>
                <AsciiArt type={"flopyDisk"} fontSize={theme.typography.h4.fontSize}/>
            </BoxArt>

        </Box>
    )
}