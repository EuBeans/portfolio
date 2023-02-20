import React, { useEffect } from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import { Grid, Tooltip} from '@mui/material';
import {theme} from '../assets/theme';
import Typography from '@mui/material/Typography';
import Typical from 'react-typical'
import SectionDivider from './SectionDivider';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import polygonContourV1  from '../assets/images/polygonContourV1.png';
import polygonContourProject  from '../assets/images/polygonContourProject.png';
import leagueOfLegendsMLGif  from '../assets/images/leagueOfLegendsMLGif.gif';
import portfolio from '../assets/images/portfolio.png';
import parkeris from '../assets/images/parkeris.png';
import storyBook from '../assets/images/storyBook.gif';
const projects = [
    {
        title: "Polygon Contour V1",
        description: "A web application that allows users to draw polygons on a map and get the contour of the polygon.",
        image: polygonContourV1,
        link: "",
    },
    {
        title: "League of Legends ML",
        description: "A Machine Learning project that uses a neural network to predict the outcome of a League of Legends game based on the first 10 minutes of the game.",
        image: leagueOfLegendsMLGif,
        link: "",
    },
    {
        title: "Portfolio Website",
        description: "A website that showcases my skills and projects. This website was built using React and Material UI.",
        image: portfolio,
        link: "",
    },
    {
        title: "Parkeris React Native App",
        description: "A React Native app that allows users to find parking spots in the city of Ottawa. This app was built using React Native, SpringBoot and Graphql microservice architecture.",
        image: parkeris,
        link: "",
    },
    {
        title: "Obelix StoryBook",
        description: "A StoryBook that showcases the components used in the Parkeris React Native app. This StoryBook was built using React Native, StoryBook and Typescript.",
        image: storyBook,
        link: "",
    },
    {
        title: "Polygon Contour V2",
        description: "An improved version of Polygon Contour V1. This version allows users to draw polygons on a map and get the contour of the polygon. This version was build using TS, and can handle better angles and more complex polygons.",
        image: polygonContourProject,

    }

]

const ProjectCard = () => {
    const contentBoxStyle = {
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

    const boxHeaderBorderStyle = {
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
    const textStyle = {
        color: theme.palette.text.secondary, 
        fontSize: theme.typography.body2.fontSize, 
        fontFamily: theme.typography.fontFamily, 
        fontWeight: theme.typography.body2.fontWeight, 
        letterSpacing: theme.typography.body2.letterSpacing
    }
    const styleSpecChar = {
    color: theme.palette.text.special, 
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.h3.fontWeight,
    letterSpacing: theme.typography.h3.letterSpacing, 
    fontSize: theme.typography.h3.fontSize,
    }

    const toastStyle = {
        position: 'absolute',
        top: '50vh',
        left: '0px',
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        zIndex: 100,
    }

    const cardContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        padding: '10px',
        width: '100%',
        height: '100%',

    }
    

    const cardContentStyle = {
        display: 'flex',
        maxWidth: '300px',
        marginBottom: '20px',
        marginX: '10px',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderRadius: '0px',
        border: '1px solid',
        borderColor: theme.palette.secondary.main,
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)',
        }
    }

    const cardActiontyle = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
    }
        
    // for each project in projects, create a card
    const projectCards = projects.map((project) => {
        return (
            <Card sx={cardContentStyle}>
                <CardActionArea sx={cardActiontyle}>
                    <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt="card-project"
                    />
                    <CardContent sx ={{}}>
                        <Typography gutterBottom variant="h5" component="div" sx={headerStyle}>
                            {project.title}
                        </Typography>
                        <Typography variant="body2" sx={textStyle}>
                            {project.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    })
    return (
        <Box sx={cardContainerStyle}>
            {projectCards}
        </Box>
    )

}

export default ProjectCard;