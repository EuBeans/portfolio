import React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import { Button, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import {theme} from '../assets/theme';
import Typography from '@mui/material/Typography';
import Typical from 'react-typical'
import Dots from './Dots';
import AsciiArt from './AsciiArt';
import SectionDivider from './SectionDivider';
import WorkExperienceTimeLine from './WorkExperienceTimeLine';

const skillTableData = [
    {
        tableName: "Frameworks",
        tableData: ["SpringBoot", "React", "Angular", "NodeJs", "Express", "Flask", "Bootstrap", "Material UI", "JQuery"],   
    },
    {
    tableName: "Languages",
    tableData: ["Java", "Python", "C++", "C", "C#", "JavaScript", "TypeScript", "Kotlin"],
    },
    {
        tableName: "Tools",
        tableData: ["Git", "GitHub","Docker", "Gradle", "Jira", "Confluence", "AWS", "Azure", "GCP", "Heroku","Windows", "MacOS"],
    },
    {
    tableName: "Databases",
    tableData: ["MySQL", "PostgreSQL", "SQLite", "Firebase"],
    },
    {
    tableName: "Other",
    tableData: ["Agile", "Scrum", "Kanban", "REST", "GraphQL", "OOP", "Functional Programming", "Data Structures", "Algorithms", "Design Patterns", "Clean Code"]
    }
]
const ExperienceSection = () => {

    const skillTableBoxStyle = {
        //this style is a container that will hold multiple skill tables
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        padding: '10px',


    }
    const skillBoxArtStyle = {
        boder: '1px solid',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'Transparent',
        display: {xs:"none",md:"flex"},
        flexWrap: 'nowrap',
        position: 'relative',
        minHeight: '40vh',
        width: '100%',
        
    }

    const SkillBoxHeaderStyle = {
        paddingY: '30px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',        
    }

    const skillBoxHeaderBorderBoxStyle = {
        //border with only 1 straight line horizontal
        border: '1px solid',
        borderRight: '0px',
        borderLeft: '0px',
        borderTop: '0px',
        width: '400px',
        borderColor: theme.palette.secondary.main,
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '15px',
        borderRadius: '0px',

    }
    const SkillHeaderStyle ={
        color: theme.palette.text.primary,
        fontSize: theme.typography.h2.fontSize,
        fontFamily: theme.typography.fontFamily,
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

    return (
        <SectionDivider>
            <Grid  md={12}  sx={SkillBoxHeaderStyle}>
                <Grid>
                <Typography sx={SkillHeaderStyle}>
                    <span style={styleSpecChar}>#</span><Typical
                                steps={["Experiences", 5000]}
                                loop={1}
                                wrapper="span"
                            />  
                </Typography>
                </Grid>
                <Grid>
                    <Box sx={skillBoxHeaderBorderBoxStyle}/>
                </Grid>

            </Grid>
           
            <Grid  md={12} >
                <Box sx={skillTableBoxStyle}>
                    <WorkExperienceTimeLine/>
                </Box>
            </Grid>
            
            
        </SectionDivider>
    )

}

export default ExperienceSection;