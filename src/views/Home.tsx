// home component for the app tsx
import React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import {theme} from '../assets/theme';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Typography from '@mui/material/Typography';
import Typical from 'react-typical'
import Dots from '../components/Dots';
import SummarySection from '../components/SummarySection';
import SkillSection from '../components/SkillSection';
import SectionDivider from '../components/SectionDivider';
import ExperienceSection from '../components/ExperienceSection';
const codingLanguages = ["code in", 1000,"code in Java", 5000, "code in Python", 5000, "code in C++", 5000, "code in C", 5000,"code in C#", 5000, "code in JavaScript", 5000, "code in TypeScript", 5000, "code in Kotlin" ]
const Home = () => {
      // style for quote and # 
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
            <SkillSection/>
            <ExperienceSection/>
        </Container>
    </Box>
    );
};

export default Home;