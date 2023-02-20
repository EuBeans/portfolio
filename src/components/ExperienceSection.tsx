import React, { useEffect } from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import { Grid} from '@mui/material';
import {theme} from '../assets/theme';
import Typography from '@mui/material/Typography';
import Typical from 'react-typical'
import SectionDivider from './SectionDivider';
import WorkExperienceTimeLine from './WorkExperienceTimeLine';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ExperienceSection = () => {
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

      
    const workExperienceBoxStyle = {
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

    const boxHeaderStyle = {
        paddingY: '30px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',        
    }

    const boxHeaderBorderBoxStyle = {
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

    return (
        <SectionDivider>
            <Grid  md={12}  sx={boxHeaderStyle}>
                <Grid>
                <Typography sx={headerStyle}>
                    <span ref={ref} style={styleSpecChar}>#</span><Typical
                                steps={[500,"Experiences", 5000]}
                                loop={stateTyper}
                                wrapper="span"
                            />  
                </Typography>
                </Grid>
                <Grid>
                    <Box sx={boxHeaderBorderBoxStyle}/>
                </Grid>

            </Grid>
           
            <Grid  md={12} >
                <Box sx={workExperienceBoxStyle}>
                    <WorkExperienceTimeLine/>
                </Box>
            </Grid>
            
            
        </SectionDivider>
    )

}

export default ExperienceSection;