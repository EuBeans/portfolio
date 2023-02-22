import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../../App.css';
import {theme} from '../../assets/theme';
import 'react-vertical-timeline-component/style.min.css';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {WorkExperience} from '../../const/constants';
import SchoolIcon from '@mui/icons-material/School';

interface WorkExperienceTimeLineProps {
    ShowAll: boolean;
}

const WorkExperienceTimeLine = (props:WorkExperienceTimeLineProps) => {

    const {ShowAll} = props;
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
        color: theme.palette.text.secondary,
        fontSize: theme.typography.body1.fontSize,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.body1.fontWeight,
        letterSpacing: theme.typography.body1.letterSpacing,
    }


    const styleSpecChar = {
        color: theme.palette.text.special, 
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.body1.fontWeight,
        letterSpacing: theme.typography.h3.letterSpacing, 
        fontSize: theme.typography.body1.fontSize,
    }

    const workContentBoxStyle = {
        background: "transparent", 
        color: 'white',
        border: '3px solid',
        borderColor: theme.palette.background.special, 
        borderRadius:"0px", 
        boxShadow: 'none' 
    }

    const workContentBoxStyle2 = {
        background: "transparent",
        color: 'white',
        border: '3px solid',
        borderColor: theme.palette.background.light,
        borderRadius:"0px",
        boxShadow: 'none'
    }

    const workIconStyle = {
        background: theme.palette.background.default, 
        color: theme.palette.background.special, 
        border: '4px solid',
        borderColor: theme.palette.background.secondary, 
        boxShadow: 'none' 
    }

    const contentArrowStyle = {
        borderRight: '10px solid',
        borderRightColor: theme.palette.background.special,
    }

    const contentArrowStyle2 = {
        borderRight: '10px solid',
        borderRightColor: theme.palette.background.light,
    }
    
    const chipStyle = {
        backgroud:"transparent",
        color: theme.palette.text.primary,
        border: '1px solid',
        borderRadius:"0px",
    }

    const stackStyle ={
        justifyContent: 'flex-start',
        display: 'inline-flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: "4px",
        margin: 0,

    }
    //generate the work experience timeline
    const generateWorkExperienceTimeline = () => {

        //find all the line breaks in description and replace them with a new line and a tab
        let workExperiences :string[][] = []
        WorkExperience.forEach((workExperience,index) => {
            workExperiences[index] = workExperience.description.split(/\\n/g);
        })
        return WorkExperience.map((workExperience,index) => {


            //if prop on only show the first two
            if (!ShowAll && index >1){
                return;
            }
            return(
                <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--work"
                    contentStyle={ index % 2  ? workContentBoxStyle : workContentBoxStyle2}
                    contentArrowStyle={index % 2 ? contentArrowStyle : contentArrowStyle2}
                    dateClassName={ "datePadding" }
                    date={workExperience.date}
                    iconStyle={workIconStyle}
                    icon={workExperience.icon === "work" ?<WorkOutlineIcon/> : <SchoolIcon/>}
                >
                    {workExperience.skills.map((skill) => {
                            return(
                                <Stack direction="row" spacing={1} sx={stackStyle}>
                                    <Chip label={skill} variant="outlined"  sx={[chipStyle,{borderColor: index % 2? theme.palette.primary.light : theme.palette.secondary.main}]}/>
                                </Stack>
                            )
                        })
                    }
                    <h4 style={headerStyle}>
                        {workExperience.title}
                    </h4>
                    <h5 style={subHeaderStyle}>
                        {workExperience.company}
                    </h5>
                    <h5 style={subHeaderStyle}>
                        {workExperience.location}
                    </h5>
                    <p style={bodyStyle}>
                        {workExperiences[index].map((description,index) => {
                            return(
                                <>
                                    <span style={ styleSpecChar}>@</span>
                                    <span key={index}>
                                        {description}
                                        <br/>
                                        <br/>
                                    </span>
                                </>
                            )
                        })
                        }
                    </p>
                </VerticalTimelineElement>
            )
            }
        )
    }
    return(
        <VerticalTimeline
            lineColor={theme.palette.background.secondary}
            layout='2-columns'
        >
            {generateWorkExperienceTimeline()} 
        </VerticalTimeline>
    )

}

export default WorkExperienceTimeLine;