// home component for the app tsx
import React from 'react';
import '../App.css';
import NavBar from "../components/NavBar";
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import {theme} from '../assets/theme';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Typography from '@mui/material/Typography';
import Typical from 'react-typical'


import Dots from '../components/Dots';
const codingLanguages = ["code in", 1000,"code in Java", 5000, "code in Python", 5000, "code in C++", 5000, "code in C", 5000,"code in C#", 5000, "code in JavaScript", 5000, "code in TypeScript", 5000, "code in Kotlin" ]
const Home = () => {
      // style for quote and # 
    const containerStyle = {
        backgroundColor: theme.palette.background.default,
        paddingTop: '50px',
        height: '100vh',
    }

    const imageBoxStyle = {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        display: "inline-block",/* <= shrinks container to image size */
    }

    const svgStyle = {
        position: 'absolute',
        top: '40%',
        left: '80%',
    }

    const profileImageStyle = {
        display: "block",
        maxWidth: "100%",
        height: "auto"
    }

    const aboutBoxStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        }


    const aboutBoxTextStyle = {
        justifyContent: 'center',

    }
    const AboutBoxImageStyle = {

    }

    const aboutHeadertStyle ={
        color: theme.palette.text.primary,
        fontSize: theme.typography.h3.fontSize,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.h3.fontWeight,
        letterSpacing: theme.typography.h3.letterSpacing,
    }
    const aboutTextStyle ={
        color: theme.palette.text.secondary,
        fontSize: theme.typography.body1.fontSize,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.body1.fontWeight,
        letterSpacing: theme.typography.body1.letterSpacing,
    }


    const styleSpecChar = {
    color: theme.palette.text.special, 
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.h3.fontWeight,
    letterSpacing: theme.typography.h3.letterSpacing, 
    fontSize: theme.typography.h3.fontSize,
    }
    const styleTextChar = {
    color: theme.palette.text.primary, 
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.h3.fontWeight,
    letterSpacing: theme.typography.h3.letterSpacing, 
    fontSize: theme.typography.h3.fontSize,
    }

    return (
    <Box sx = {containerStyle}>
        <Container 
            maxWidth="lg" 
        >
            <Grid container spacing={2} sx={aboutBoxStyle}  >
                <Grid  md={6}  >
                    <Box sx={aboutBoxTextStyle}>
                        <Grid  xs={12} >
                            <Typography sx={aboutHeadertStyle}> 
                            Jean is a <span style={styleSpecChar}> Software Engineer</span> who loves to&nbsp;<span>
                            <Typical
                                steps={codingLanguages}
                                loop={1}
                                wrapper="span"
                            />
                            </span>
                            </Typography>
                        </Grid>
                        <Grid  xs={12} sx={{paddingTop:"20px"}}>
                            <Typography sx={aboutTextStyle}>
                            He is a recent graduate from the University of Ottawa with a Bachelor of Engineering in Software Engineering. He is passionate about software development and is always looking for new opportunities to learn and grow.
                            </Typography>
                        </Grid>

                    </Box>
                </Grid>
                <Grid  md={6} >
                    <Box sx={AboutBoxImageStyle}>
                        <Box sx={imageBoxStyle}>
                            <Box sx={svgStyle}>
                                <Dots/>
                            </Box>
                            <Box sx={profileImageStyle}>
                                <img style={{display:"flex"}} src={require("../assets/img/unnamed.jpg")} alt="Jean" width="100%" />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
    );
};

export default Home;