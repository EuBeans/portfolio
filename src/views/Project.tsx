// home component for the app tsx
import React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import {Grid, Typography } from '@mui/material';
import {theme} from '../assets/theme';
import ProjectCard from '../components/molecules/ProjectCard';


const Project = () => {
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

    const boxHeaderLinkStyle = {
        width: '100px',
        borderColor: theme.palette.primary.light,
        flexDirection: 'row-reverse',
        display: 'inline-flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingBottom: '15px',
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

    const styleNavLink = {
        my: 2,
        mx: 1,
        flexDirection: 'row',
        display: 'flex',
        color: theme.palette.text.primary, 
        fontFamily: theme.typography.fontFamily, 
        fontWeight: theme.typography.body1.fontWeight, 
        letterSpacing: theme.typography.body1.letterSpacing, 
        fontSize: theme.typography.body1.fontSize,
        textDecorationColor: theme.palette.text.primary,
        '&:hover': {
          color: theme.palette.text.special,
          

        },
    }

    return (
    <Box sx = {containerStyle}>
        
        <Grid  xs={12}  sx={boxHeaderStyle}>
            <Grid>
                <Typography sx={headerStyle}>
                    <span  style={styleSpecChar}>/</span>
                        {"projects"}
                </Typography>
            </Grid>
        </Grid>

        <Grid  xs={12}  sx={boxBodyStyle}>
            <Grid>
            <Typography sx={bodyStyle}>
                    {"List of my projects"}
            </Typography>
            </Grid>
        </Grid>

        <Grid  md={12} >
            <Box sx={contentBoxStyle}>
                <ProjectCard
                        ShowAll ={true}
                        ShowSections = {true}
                    />
                </Box>
        </Grid>
            
        
    </Box>
    );
};

export default Project;