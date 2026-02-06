// home component for the app tsx
import React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import {theme} from '../assets/theme';
import DemoSection from '../components/sections/DemoSection';


const Demos = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: "column",
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
    }
    const contentBoxStyle = {
        //this style is a container that will hold multiple skill tables
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingTop:"20px"
    }

    const boxHeaderStyle = {
        paddingTop: '30px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: { xs: 'wrap', md: 'nowrap' },
        rowGap: '10px',
    }


    const headerStyle ={
        color: theme.palette.text.primary,
        fontSize: theme.typography.h2.fontSize,
        fontFamily: theme.typography.fontFamily2,
        fontWeight: theme.typography.h2.fontWeight,
        letterSpacing: theme.typography.h2.letterSpacing,
        lineHeight: 1.4,
        maxWidth: "100%",
        overflowWrap: "anywhere",
    }

    const styleSpecChar = {
    color: theme.palette.text.special, 
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.h3.fontWeight,
    letterSpacing: theme.typography.h3.letterSpacing, 
    fontSize: theme.typography.h3.fontSize,
    }



    return (
    <Box sx = {containerStyle}>
        <Box className="terminal-header-block">
            <Box className="terminal-status">
                <span>status: ok</span>
                <span>uptime: 2y</span>
                <span>build: release</span>
            </Box>
            <Grid xs={12} md={12} sx={boxHeaderStyle}>
                <Grid>
                    <Typography sx={headerStyle} className="terminal-heading">
                        <span className="terminal-prompt">jp@linux:~$</span>
                        <span  style={styleSpecChar} className="terminal-cursor">/</span>
                            {"demos --list"}
                            <span className="terminal-cursor">█</span>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
        <Grid xs={12} md={12} >
            <Box sx={contentBoxStyle}>
                <DemoSection/>
            </Box>
        </Grid>
  

        

            
        
    </Box>
    );
};

export default Demos;
