// home component for the app tsx
import React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import {theme} from '../assets/theme';
import AboutMeSection from '../components/sections/aboutMeSection';
import SkillSection from '../components/sections/SkillSection';


const AboutMe = () => {
    const containerStyle = {
        backgroundColor: theme.palette.background.default,
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

    return (
    <Box sx = {containerStyle}>
        <Grid xs={12} md={12} >
            <Box sx={contentBoxStyle}>
                <AboutMeSection showHeader={true}/>
            </Box>
        </Grid>
        <Grid xs={12} md={12} >
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
