import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
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
import Icon from '@mui/material/Icon';
import 'react-vertical-timeline-component/style.min.css';

const WorkExperienceTimeLine = () => {

    const headerStyle ={
        color: theme.palette.text.primary,
        fontSize: theme.typography.h3.fontSize,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.h2.fontWeight,
        letterSpacing: theme.typography.h2.letterSpacing,
    }

    const subHeaderStyle ={
        color: theme.palette.text.primary,
        fontSize: theme.typography.h4.fontSize,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.h4.fontWeight,
        letterSpacing: theme.typography.h4.letterSpacing,
    }

    const bodyStyle ={
        color: theme.palette.text.primary,
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

    const workContentBoxStyle = {
        background: "transparent", 
        color: 'white',
        border: '4px solid #04ca9f', 
        borderRadius:"0px", 
        boxShadow: 'none' 
    }

    const workIconStyle = {
        background: theme.palette.background.default, 
        color: 'white', 
        border: '4px solid #adb4b4', 
        boxShadow: 'none' 
    }

    return(
 
            
        <VerticalTimeline
            lineColor={theme.palette.background.secondary}
            layout='2-columns'
        >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={workContentBoxStyle}
                contentArrowStyle={{ borderRight: '10px solid #04ca9f'}}
                dateClassName={ "datePadding" }
                date="2011 - present"
                iconStyle={{ background: theme.palette.background.default, color: 'white', border: '4px solid #adb4b4', boxShadow: 'none' }}
                icon={<Icon />}
            >
                <h4 style={headerStyle}>
                    Creative Director
                </h4>

                <h5 style={subHeaderStyle}>
                    Miami, FL
                </h5>

                
                <p style={bodyStyle}>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
      
    )

}

export default WorkExperienceTimeLine;