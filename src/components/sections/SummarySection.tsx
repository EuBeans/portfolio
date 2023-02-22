import React from 'react';
import '../../App.css';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import {theme} from '../../assets/theme';
import Typography from '@mui/material/Typography';
import Typical from 'react-typical'
import mainPicture  from '../../assets/images/mainPicture.jpg';
import ImageBox from '../molecules/imageBox';
import {codingLanguages} from '../../const/constants';

 const SummarySection = () => {
    
    const SPEED = 1.5;
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

    const quoteBoxStyle ={
        quoteBoxStyle:{
            paddingTop: '15vh',
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
        <Box sx={{height: '100vh'}}>
            <Grid container spacing={2} sx={aboutBoxStyle}  >
                <Grid  xs={12} md={6} order={{xs:1,sm:1, md:1}} sx={{}}>
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
                <Grid  xs={12} md={6} order={{xs:1,sm:1, md:1}} >
                    <ImageBox
                            image={mainPicture}
                            speed= {SPEED}
                    />
                </Grid>
            </Grid>
            <Grid  md={12} order={{xs: 3}} >
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
        </Box>
    )

}
export default SummarySection;