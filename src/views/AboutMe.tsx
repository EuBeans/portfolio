// home component for the app tsx
import React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import {theme} from '../assets/theme';
import AboutMeSection from '../components/sections/aboutMeSection';
import SkillSection from '../components/sections/SkillSection';


const AboutMe = () => {
    const containerStyle = {
        backgroundColor: theme.palette.background.default,
        paddingTop: '5vh',
        minHeight: '100vh',   
    }
    const contentBoxStyle = {
        //this style is a container that will hold multiple skill tables
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        paddingTop:"20px"
    }

    const boxHeaderStyle = {
        paddingTop: '30px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',        
    }
    const boxBodyStyle = {
        paddingY: '5px',
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

    const bodyStyle ={
        color: theme.palette.text.primary,
        fontSize: theme.typography.body1.fontSize,
        fontFamily: theme.typography.fontFamily2,
        fontWeight: theme.typography.body1.fontWeight,
        letterSpacing: theme.typography.body1.letterSpacing,
    }

    return (
    <Box sx = {containerStyle}>
        <Grid  xs={12}  sx={boxHeaderStyle}>
            <Grid>
                <Typography sx={headerStyle}>
                    <span  style={styleSpecChar}>/</span>
                        {"about-me"}
                </Typography>
            </Grid>
        </Grid>

        <Grid  xs={12}  sx={boxBodyStyle}>
            <Grid>
            <Typography sx={bodyStyle}>
                {"Who am I ? and what do I do ?"}
            </Typography>
            </Grid>
        </Grid>

        <Grid  md={12} >
            <Box sx={contentBoxStyle}>
                <AboutMeSection/>
            </Box>
        </Grid>
        <Grid  md={12} >
            <Box sx={contentBoxStyle}>
                <SkillSection
                    showArt={false}
                />
            </Box>
        </Grid>
            
        
    </Box>
    );
};

export default AboutMe;