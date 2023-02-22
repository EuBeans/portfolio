// home component for the app tsx
import React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import {theme} from '../assets/theme';
import WorkExperienceTimeLine from '../components/molecules/WorkExperienceTimeLine';


const Experience = () => {
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

    const boxHeaderBorderStyle = {
        //border with only 1 straight line horizontal
        border: '1px solid',
        borderRight: '0px',
        borderLeft: '0px',
        borderTop: '0px',
        width: '100px',
        borderColor: theme.palette.secondary.main,
        flexDirection: 'row-reverse',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '15px',
        borderRadius: '0px',

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
                        {"experience"}
                </Typography>
            </Grid>
        </Grid>

        <Grid  xs={12}  sx={boxBodyStyle}>
            <Grid>
            <Typography sx={bodyStyle}>
                    {"A timeline of my experiences"}
            </Typography>
            </Grid>
        </Grid>

        <Grid  md={12} >
            <Box sx={contentBoxStyle}>
                <WorkExperienceTimeLine
                    ShowAll={true}
                />
                </Box>
        </Grid>
            
        
    </Box>
    );
};

export default Experience;