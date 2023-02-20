import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../App.css';
import {theme} from '../assets/theme';
import 'react-vertical-timeline-component/style.min.css';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const WorkExperience = [
    {
        title: "Software Engineer Intern",
        company: "IBwave Solutions",
        date: "May 2022 - August 2022",
        location: "Montreal, Quebec",
        description: "Worked on a team of 8 to develop a new feature and tools in order to customize Fibre Obtic cables. \\nReact was used for frontend and C# for backend programming, and have designed user interfaces and utilized REST for communication. \\nCollaborated with project managers, improved system performance, and reviewed project specifications",
        icon: "work",
        skills: ["React", "C#", "REST", "Typescript", "HTML", "CSS", "Git","PostgreSQL", "PostMan", "Jira", "Confluence"]
    },
    {
        title: "Software Developper Intern",
        company: "NetFore Systems",
        date: "May 2021 - August 2021",
        location: "Ottawa, Ontario",
        description: "Implemented RESTful API calls using React, resulting in a 15% increase in user interface performance. \\nDesigned and developed user interfaces using ReactJS, which led to a 20% increase in user satisfaction based on surveys. \\nIn addition, contributed to team meetings and provided regular updates on project progress, resulting in on-time delivery of projects with a 95% success rate.",
        icon: "work",
        skills: ["React", "Groovy", "REST", "Jira", "Confluence", "Git", "PostgreSQL"]
    },
    {
        title: "PROGRAMMER ANALYST",
        company: "University Of Ottawa",
        date: "September 2020 - December 2020",
        location: "Ottawa, Ontario",
        description: "Led the development of multiple websites utilizing HTML, JavaScript, AJAX, and JSON to transform mockups into fully functional web presences. \\nDeveloped back-end components to integrate websites with web services such as Google Analytics, resulting in a 20% increase in website traffic analysis. \\nUtilized proficiency in HTML, CSS, JavaScript, and jQuery to code and maintain websites, resulting in a smooth and intuitive user experience.",
        icon: "work",
        skills: [".NET", "C#", "HTML", "CSS", "JavaScript", "jQuery", "Git", "SQL"]

    },
    {
        title: "JUNIOR SOFTWARE DEVELOPER",
        company: "SSC Telecom Group",
        date: "January 2020 - May 2020",
        location: "Ottawa, Ontario",
        description: "Developed a Python script to benchmark HTTP servers, resulting in a 10% increase in website performance. \\nLed website development, converting mockups into functional web presence using HTML, JavaScript, AJAX, and JSON. \\nAcquired experience in using MySQL and backend frameworks such as Symphony to develop efficient databases. \\nSuccessfully integrated various APIs such as Apache HTTP server and Google Analytics into the framework, resulting in a 20% increase in website functionality.",
        icon: "work",
        skills: ["Python", "HTML", "CSS", "JavaScript", "jQuery", "Git", "MySQL", "Apache HTTP Server", "AJAX"]
    },
    {
        title: "LEVEL ONE ANALYST",
        company: "Royal Canadian Mounted Police",
        date: "June 2019 to September 2019",
        location: "Ottawa, Ontario",
        description: "Developed troubleshooting and problem-solving skills through technical support for RCMP employees.\\nEffectively diagnosed and resolved issues through testing, expertise, and questioning. \\nProvided professional support to guide users through basic troubleshooting tasks",
        icon: "work",
        skills: ["PowerShell", "HTML","Troubleshooting", "Windows 10"]
    }   
]
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
        borderColor: theme.palette.secondary.main,
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
            return(
                <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--work"
                    contentStyle={ index % 2  ? workContentBoxStyle : workContentBoxStyle2}
                    contentArrowStyle={index % 2 ? contentArrowStyle : contentArrowStyle2}
                    dateClassName={ "datePadding" }
                    date={workExperience.date}
                    iconStyle={workIconStyle}
                    icon={<WorkOutlineIcon/>}
                >
                    {workExperience.skills.map((skill,index) => {
                            return(
                                <Stack direction="row" spacing={1} sx={stackStyle}>
                                    <Chip label={skill} variant="outlined"  sx={chipStyle}/>
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