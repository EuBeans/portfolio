import React, { useEffect } from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import { Button, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import {theme} from '../assets/theme';
import Typography from '@mui/material/Typography';
import Typical from 'react-typical'
import Dots from './Dots';
import AsciiArt from './AsciiArt';
import SectionDivider from './SectionDivider';
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import BoxArt from './BoxArt';

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
const SkillSection = () => {
    const [ref, inView] = useInView();

    //state
    const [stateTyper, setstateTyper] = React.useState(0);

    useEffect(() => {

        if(inView){
            setstateTyper(1);
        }
        else{
            setstateTyper(0);
        }
      }, [inView]);


    const skillBoxStyle = {
        overflow: 'hidden',
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        }


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
        backgroundColor: 'transparent',
        display: {xs:"none",md:"flex"},
        flexWrap: 'nowrap',
        position: 'relative',
        minHeight: '70vh',
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
        width: '200px',
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
    
    const boxAsteticStyle = {
        border: '1px solid',
        display: 'inline-flex',
        borderColor: theme.palette.background.secondary,
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 1,
        overflow: 'hidden',
    }
    const dotAsteticStyle = {
        borderColor: theme.palette.background.secondary,
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 1,
        overflow: 'hidden',
    }
    const asciiArtBoxStyle = {
        display: 'inline-flex',
        backgroundColor: 'transparent',
        position: 'absolute',
        padding: '0',
        margin: '0',
        overflow: 'hidden',
    }

    const skillTextStyle = {
        display: "inline-block",
        color: theme.palette.text.secondary, 
        fontSize: theme.typography.body1.fontSize, 
        fontFamily: theme.typography.fontFamily, 
        fontWeight: theme.typography.body1.fontWeight, 
        letterSpacing: theme.typography.body1.letterSpacing
    }
    const skillTextDividerStyle = {
        display: "inline-block",
        color: theme.palette.secondary.light, 
        fontSize: theme.typography.body1.fontSize, 
        fontFamily: theme.typography.fontFamily, 
        fontWeight: theme.typography.body1.fontWeight, 
        letterSpacing: theme.typography.body1.letterSpacing
    }

    const printSkills = (skill:string) => {
        return (
            <span style={skillTextStyle} key={skill}>{skill}<span style={skillTextDividerStyle}>|</span></span>
        )
    }


    //function will genereate a table of skills
    const generateSkillTable = (skillTableData: any) => {
        return (
            <TableContainer sx={{ margin: '5px'}}>
                <Table sx={{border: '1px solid', borderColor: theme.palette.background.secondary, backgroundColor: 'transparent'}} aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{color: theme.palette.text.primary, fontSize: theme.typography.h5.fontSize, fontFamily: theme.typography.fontFamily2, fontWeight: theme.typography.h5.fontWeight, letterSpacing: theme.typography.h5.letterSpacing,}} align="center">{skillTableData.tableName}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                       
                        <TableRow
                            key={1}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '' }}
                        > 
                        <TableCell 
                            component="th"
                            scope="row">
                                {skillTableData.tableData.map((skill: any) => (
                                    printSkills(skill)                  
                            ))}
                            </TableCell>  
                        </TableRow>
                    
                    </TableBody>
                </Table>
            </TableContainer>

        )
    }

    return (
        <SectionDivider>
            <Grid  md={12}  sx={SkillBoxHeaderStyle}>
                <Grid>
                
                <Typography sx={SkillHeaderStyle}>
                    <span ref={ref} style={styleSpecChar}>#</span><Typical
                                steps={[500,"Skills", 7000]}
                                loop={stateTyper}
                                wrapper="span"
                                />
                </Typography>
                </Grid>
                <Grid>
                    <Box sx={skillBoxHeaderBorderBoxStyle}/>
                </Grid>

            </Grid>
            <Grid container spacing={2} sx={[skillBoxStyle,{paddingX:'50px'}]}  >
                <Grid  md={5} >
                    <Box sx={skillBoxArtStyle}>
                        <BoxArt box={"box"} width= {'100px'} height= {'100px'} top=  {'60%'} right= {'80%'} x={[-0,-120]} y={[0,410]} speed={0.5}/>
                        <BoxArt box={"box"} width= {'50px'} height= {'50px'} top=  {'78%'} right= {'20%'} x={[0,120]} y={[0,510]} speed={0.5}/>
                        <BoxArt box={"box"} width= {'80px'} height= {'80px'} top=  {'10%'} right= {'20%'} x={[0,120]} y={[0,60]} speed={0.5}/>

                        <BoxArt box={"dot"}width= {'150px'} height= {'150px'} top=  {'5%'} right= {'70%'} x={[120,-50]} y={[310,25]} speed={0.5}>
                            <Dots  
                                radius = {3}
                                gap = {16}
                                width = {5}
                                height = {5}
                                viewBox = "0 0 200 200"
                                />
                        </BoxArt>
                        <BoxArt box={"dot"} width= {'100px'} height= {'100px'} top=  {'0%'} right= {'30%'} x={[120,70]} y={[310,130]} speed={0.5}>
                            <Dots  
                                radius = {3}
                                gap = {16}
                                width = {5}
                                height = {5}
                                viewBox = "0 0 200 200"
                                />
                        </BoxArt>
                        <BoxArt box={"dot"} width= {'100px'} height= {'100px'} top={'70%'} right= {'30%'} x={[120,90]} y={[310,480]} >
                            <Dots  
                                radius = {3}
                                gap = {16}
                                width = {5}
                                height = {5}
                                viewBox = "0 0 200 200"
                                />
                        </BoxArt>
                        <BoxArt box={"ascii"} width={"400px"} height= {'400px'} top={'60%'} right= {'30%'} x={[0,220]} y={[150,150]} >
                            <AsciiArt type={"computer"} fontSize={theme.typography.h2.fontSize} color={theme.palette.secondary.main}/>
                        </BoxArt>


                    </Box>
                </Grid>
                <Grid  md={7}  >
                    <Box sx={skillTableBoxStyle}>
                        <Grid  xs={6} sx={{padding:"3px"}}>
                            {generateSkillTable(skillTableData[0])}
                            
                        </Grid>
                        <Grid  xs={6} sx={{padding:"3px"}}>
                            {generateSkillTable(skillTableData[1])}
                        </Grid>
                        <Grid  xs={6} sx={{padding:"3px"}}>
                            {generateSkillTable(skillTableData[2])}
                        </Grid>
                        <Grid  xs={6} sx={{padding:"3px"}}>
                            {generateSkillTable(skillTableData[3])}
                        </Grid>
                        <Grid  xs={6} sx={{padding:"3px"}}>
                            {generateSkillTable(skillTableData[4])}
                        </Grid>
                        <Grid  xs={6} sx={{padding:"10px",position:"relative"}}>
                            <Box sx={[asciiArtBoxStyle,{top: '5%', left: '30%', height:"100 px "}]}>
                                <AsciiArt type={"artLinux"} fontSize={theme.typography.h4.fontSize}/>
                            </Box>
                        </Grid>
                        
                    </Box>
                </Grid>
                
            </Grid>
        </SectionDivider>
    )

}

export default SkillSection;