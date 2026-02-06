// home component for the app tsx
import React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {theme} from '../assets/theme';
import SummarySection from '../components/sections/SummarySection';
import SkillSection from '../components/sections/SkillSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectSection from '../components/sections/ProjectSection';
import AboutMeSection from '../components/sections/aboutMeSection';

const Home = () => {
    const containerStyle = {
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',   
    }

    return (
    <Box sx = {containerStyle}>
        <Container maxWidth="lg" disableGutters>
            <Box className="home-section">
                <SummarySection/>
            </Box>
            <Box className="home-section">
                <ProjectSection/>
            </Box>
            <Box className="home-section">
                <SkillSection showArt={true}/>
            </Box>
            <Box className="home-section">
                <AboutMeSection showHeader={true}/>
            </Box>
            <Box className="home-section">
                <ExperienceSection/>
            </Box>
        </Container>
    </Box>
    );
};

export default Home;
