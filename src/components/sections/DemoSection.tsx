import React from 'react';
import '../../App.css';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import {theme} from '../../assets/theme';
import Typical from 'react-typical';

 const DemoSection = () => {
    
    const containerDemoStyle = {
        display: 'flex',
        width:'100vh',
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    }
    const demoBoxStyle = {
        border: '3px solid',
        borderColor: theme.palette.secondary.main,
        display: 'flex',
        width:'75%',
    }
    const headerStyle ={
        color: theme.palette.primary.light,
        fontSize: theme.typography.h5.fontSize,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.h3.fontWeight,
        letterSpacing: theme.typography.h2.letterSpacing,
    }

    const styleSpecChar = {
        color: theme.palette.text.special, 
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.h3.fontWeight,
        letterSpacing: theme.typography.h3.letterSpacing, 
        fontSize: theme.typography.h3.fontSize,
    }

    return (
        <Box sx={containerDemoStyle}>
            <Grid>
                <Typography sx={headerStyle}>
                    <span style={styleSpecChar}>#</span>
                    <Typical
                        steps={[500,"polygon-contour", 5000]}
                        loop={1}
                        wrapper="span"
                    />  
                </Typography>
            </Grid>
            <Grid  md={12} sx={demoBoxStyle} >
                <iframe
                    src="https://polygon-contour-v2.herokuapp.com/"
                    height={600}
                    width={'100%'}
                    style={{'padding':'0','display':'flex'}}
                    allow="fullscreen"
                    frameBorder={0}
                />
            </Grid>
            <Grid>
                <Typography sx={headerStyle}>
                    <span style={styleSpecChar}>#</span>
                    <Typical
                        steps={[500,"simordia-word-game", 5000]}
                        loop={1}
                        wrapper="span"
                    />  
                </Typography>
            </Grid>
            <Grid  md={12} sx={demoBoxStyle} >
                <iframe
                    src="https://simordia-front-end-1114b24bf751.herokuapp.com/"
                    height={1000}
                    width={'100%'}
                    style={{'padding':'0','display':'flex'}}
                    allow="fullscreen"
                    frameBorder={0}
                />
            </Grid>
        </Box>
    )
}
export default DemoSection;