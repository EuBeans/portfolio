import React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import { Button, Container, Grid } from '@mui/material';
import {theme} from '../assets/theme';
import Typography from '@mui/material/Typography';
import Typical from 'react-typical'
import Dots from './Dots';
//import mainPicture  from '../assets/images/mainPicture.png';
import mainPicture  from '../assets/images/mainPicture.jpg';
import AsciiArt from './AsciiArt';
import SectionDivider from './SectionDivider';


const codingLanguages = ["code in", 1000,"code in Java", 5000, "code in Python", 5000, "code in C++", 5000, "code in C", 5000,"code in C#", 5000, "code in JavaScript", 5000, "code in TypeScript", 5000, "code in Kotlin" ]
 const SummarySection = () => {

    const contactMeButtonStyle = {
        backgroundColor: "transparent",
        border: '1px solid',
        borderColor: theme.palette.secondary.main,
        color: theme.palette.primary.light,
        fontSize: theme.typography.h6.fontSize,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.h6.fontWeight,
        letterSpacing: theme.typography.h6.letterSpacing,
        padding: '10px',
        borderRadius: '0px',
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            borderColor: theme.palette.secondary.main,
          },
        
    }

    const BoxStyle = {
        zIndex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        display: "inline-block",/* <= shrinks container to image size */
    }

    const imageBoxStyle = {
        zIndex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        display: "inline-block",/* <= shrinks container to image size */
    }

    const svgStyle = {
        position: 'absolute',
        top: '65%',
        left: '60%',
    }

    const profileImageBoxStyle = {
        display: "block",
        maxWidth: "90%",
        height: "auto",
    }

    const profileImageStyle = {
        display: "flex",
        maxWidth: "80%",
        height: "auto",
        //border bottom not solid dotted
        border: '1.5px dotted',
        borderColor: theme.palette.secondary.main,
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
    const boxAsteticStyle = {
        border: '4px solid',
        borderColor: theme.palette.background.special,
        backgroundColor: 'transparent',
        position: 'absolute',
        padding: '0',
        margin: '0',
        width: '40%',
        height: '30%',
        zIndex: 1,
        overflow: 'hidden',
    }

    const quoteBoxStyle ={
        quoteBoxStyle:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'nowrap',


        },

        textStyle: {
            color: theme.palette.text.primary,
            fontSize: theme.typography.h6.fontSize,
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.h6.fontWeight,
            letterSpacing: theme.typography.body1.letterSpacing,
        
        },

        quoteTextStyle:{
            color: theme.palette.text.secondary,
            fontSize: theme.typography.h1.fontSize,
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.h1.fontWeight,
            letterSpacing: theme.typography.h6.letterSpacing,
        },
        fieldSet:{
            display: 'flex',
            borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: theme.palette.background.secondary,
        },
        legendCaption :{ 
            position: 'relative',
            bottom: "-2.2ex", 
            left: "0%", 
            width: "30px",
            backgroundColor: theme.palette.background.default  
        },
        
        legend:{
            position: 'absolute',
            top: -10,
            left: 10,
            fontWeight: 'bold',
            backgroundColor: '#FFFFFF'
        }
    }
    return (
        <SectionDivider>
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
                                He crafts responsive websites where technologies meet creativity
                            </Typography>
                        </Grid>
                        <Grid  xs={12} sx={{paddingTop:"20px"}}>
                            <Button variant="outlined" sx={contactMeButtonStyle}>Contact Me ##</Button>
                        </Grid>

                    </Box>
                </Grid>
                <Grid  md={6} >
                    <Box sx={AboutBoxImageStyle}>
                        <Box sx={BoxStyle}>
                            <Box sx={[boxAsteticStyle,{top: '3vh', right: '20%',}]}/>
                            <Box sx={[boxAsteticStyle,{top: '71%',right: '62%'}]}/>
                            <Box sx={imageBoxStyle}>
                                <Box sx={svgStyle}>
                                    <Dots  
                                        radius = {3}
                                        gap = {16}
                                        width = {5}
                                        height = {5}
                                        viewBox = "0 0 200 200"
                                    />
                                </Box>
                                <Box sx={profileImageBoxStyle}>
                                    <img style={profileImageStyle} src={mainPicture} alt="Jean" width="100%" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid  md={12} >
                <Box sx={quoteBoxStyle.quoteBoxStyle}>
                    <fieldset style={quoteBoxStyle.fieldSet}>
                        <legend style={{...quoteBoxStyle.quoteTextStyle}} >"</legend> 
                        <Typography sx={quoteBoxStyle.textStyle}>
                        If at first you don't succeed; call it version 1.0                        
                        </Typography> 
                        <Box sx={{...quoteBoxStyle.legendCaption,...quoteBoxStyle.quoteTextStyle}}>"</Box>
                    </fieldset> 
                </Box>
            </Grid>        
        </SectionDivider>
    )

}
/*
<Typical
    steps={["He is a recent graduate from the University of Ottawa with a Bachelor of Engineering in Software Engineering. He is passionate about software development and is always looking for new opportunities to learn and grow.", 1000]}
    loop={1}
    wrapper="span"
/>
*/
export default SummarySection;