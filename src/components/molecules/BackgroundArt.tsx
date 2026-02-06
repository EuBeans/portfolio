import React from 'react';
import { Box} from '@mui/material';
import { theme } from '../../assets/theme';
import AsciiArt from './AsciiArt';
import Dots from './Dots';
import BoxArt from './BoxArt';

export default function BackgroundArt() {
    const SPEED= 1.5;
    const containerStyle = {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
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
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'200px'} top={'8%'} left= {'95%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'100px'} top={'18%'} right= {'95%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'80px'} top={'28%'} left= {'98%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'100px'} top={'42%'} right= {'98%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'150px'} top={'55%'} left= {'90%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'130px'} top={'68%'} right= {'94%'} x={[0,0]} y={[0,0]} speed={SPEED}/>
            <BoxArt box={"box"} boxStyle={boxAsteticStyle} height= {'120px'} top={'82%'} left= {'93%'} x={[0,0]} y={[0,0]} speed={SPEED}/>

            <BoxArt box={"dot"} boxStyle={asciiArtBoxStyle} height= {'100px'} top={'16%'} right= {'85%'} x={[0,0]} y={[0,0]} speed={SPEED}>
                <Dots  
                    radius = {2}
                    gap = {16}
                    width = {5}
                    height = {5}
                    viewBox = "25 0 300 300"
                />
            </BoxArt>
            <BoxArt box={"dot"} boxStyle={asciiArtBoxStyle} height= {'100px'} top={'46%'} right= {'85%'} x={[0,0]} y={[0,0]} speed={SPEED}>
                <Dots  
                    radius = {2}
                    gap = {16}
                    width = {5}
                    height = {5}
                    viewBox = "10 0 300 300"
                />
            </BoxArt>
            <BoxArt box={"dot"} boxStyle={asciiArtBoxStyle} height= {'100px'} top={'72%'} left= {'95%'} x={[0,0]} y={[0,0]} speed={SPEED}>
                <Dots  
                    radius = {2}
                    gap = {16}
                    width = { 7}
                    height = {7}
                    viewBox = "0 0 100 100"
                />
            </BoxArt>
            <BoxArt box={"ascii"}  boxStyle={asciiArtBoxStyle}  height= {'240px'} top={'34%'} left= {'85%'} x={[0,0]} y={[0,0]} speed={SPEED}>
                <AsciiArt type={"keyboard"} fontSize={theme.typography.h4.fontSize}/>
            </BoxArt>
            <BoxArt box={"ascii"}  boxStyle={asciiArtBoxStyle} height= {'400px'} top={'62%'} right= {'92%'}  x={[0,0]} y={[0,0]} speed={SPEED}>
                <AsciiArt type={"flopyDisk"} fontSize={theme.typography.h4.fontSize}/>
            </BoxArt>

        </Box>
    )
}
