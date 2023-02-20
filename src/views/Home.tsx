// home component for the app tsx
import React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import {theme} from '../assets/theme';
import SummarySection from '../components/SummarySection';
import SkillSection from '../components/SkillSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectSection from '../components/ProjectSection';

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
            <SkillSection/>
            <ExperienceSection/>
        </Container>
    </Box>
    );
};

export default Home;