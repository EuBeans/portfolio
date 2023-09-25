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
        flexDirection: "row",
        backgroundColor: theme.palette.background.default,
        paddingTop: '5vh',
        minHeight: '100vh',   
    }
    const contentBoxStyle = {
        //this style is a container that will hold multiple skill tables
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap',
        paddingTop:"20px"
    }

    const boxHeaderStyle = {
        paddingTop: '30px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',        
    }


    const headerStyle ={
        color: theme.palette.text.primary,
        fontSize: theme.typography.h2.fontSize,
        fontFamily: theme.typography.fontFamily2,
        fontWeight: theme.typography.h2.fontWeight,
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
    <Box sx = {containerStyle}>
        <Grid  md={12}  sx={boxHeaderStyle}>
            <Grid>
                <Typography sx={headerStyle}>
                    <span  style={styleSpecChar}>/</span>
                        {"demos"}
                </Typography>
            </Grid>
            <Grid  md={12} >
            <Box sx={contentBoxStyle}>
                <DemoSection/>
            </Box>
        </Grid>
        </Grid>
  

        

            
        
    </Box>
    );
};

export default Demos;