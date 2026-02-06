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

    const headerStyle ={
        color: theme.palette.text.primary,
        fontSize: theme.typography.h2.fontSize,
        fontFamily: theme.typography.fontFamily2,
        fontWeight: theme.typography.h2.fontWeight,
        letterSpacing: theme.typography.h2.letterSpacing,
        lineHeight: 1.4,
        maxWidth: "100%",
        overflowWrap: "anywhere",
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
        <Box className="terminal-header-block">
            <Box className="terminal-status">
                <span>status: ok</span>
                <span>uptime: 2y</span>
                <span>build: release</span>
            </Box>
            <Grid  xs={12}  sx={boxHeaderStyle}>
                <Grid>
                <Typography sx={headerStyle} className="terminal-heading">
                        <span className="terminal-prompt">jp@linux:~$</span>
                        <span  style={styleSpecChar} className="terminal-cursor">/</span>
                            {"ls projects/"}
                            <span className="terminal-cursor">█</span>
                    </Typography>
                </Grid>
            </Grid>
        </Box>

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
