// home component for the app tsx
import React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import {theme} from '../assets/theme';
import SummarySection from '../components/sections/SummarySection';
import SkillSection from '../components/sections/SkillSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectSection from '../components/sections/ProjectSection';
import AboutMeSection from '../components/sections/aboutMeSection';

const Home = () => {
    const containerStyle = {
        backgroundColor: theme.palette.background.default,
        paddingTop: '10vh',
        minHeight: '100vh',   
    }

    return (
    <Box sx = {containerStyle}>
        <Container 
            maxWidth="lg" 
        >   
            <SummarySection/>
            <ProjectSection/>
            <SkillSection showArt={true}/>
            <AboutMeSection/>
            <ExperienceSection/>
        </Container>
    </Box>
    );
};

export default Home;