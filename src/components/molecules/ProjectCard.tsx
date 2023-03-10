import React, { useEffect } from 'react';
import '../../App.css';
import Box from '@mui/material/Box';
import {theme} from '../../assets/theme';
import Typography from '@mui/material/Typography';
import 'react-awesome-slider/dist/styles.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Alert, ButtonBase, CardActionArea, Grid, Snackbar } from '@mui/material';
import {projects} from '../../const/constants';
import Typical from 'react-typical';
import Slide, { SlideProps } from '@mui/material/Slide';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface ProjectCardProps {
    ShowAll: boolean;
    ShowSections: boolean;
}
type TransitionProps = Omit<SlideProps, 'direction'>;

const ProjectCard = (props:ProjectCardProps) => {
    let numCardAlgo = 0;
    let numCardApp = 0;
    let numCardML = 0;

    const {ShowAll, ShowSections} = props;

    const headerStyle ={
        color: theme.palette.text.special,
        fontSize: theme.typography.h2.fontSize,
        fontFamily: theme.typography.fontFamily2,
        fontWeight: theme.typography.h2.fontWeight,
        letterSpacing: theme.typography.h2.letterSpacing,
    }
    const textStyle = {
        color: theme.palette.text.primary, 
        fontSize: theme.typography.body1.fontSize, 
        fontFamily: theme.typography.fontFamily, 
        fontWeight: theme.typography.body2.fontWeight, 
        letterSpacing: theme.typography.body2.letterSpacing
    }

    const textSpecStyle = {
        color: theme.palette.text.special, 
        fontSize: theme.typography.body1.fontSize, 
        fontFamily: theme.typography.fontFamily, 
        fontWeight: theme.typography.body2.fontWeight, 
        letterSpacing: theme.typography.body2.letterSpacing
    }

    const cardContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        padding: '20px',
        width: '100%',
        height: '100%',

    }
    

    const cardContentStyle = {
        display: 'flex',
        maxWidth: '300px',
        marginBottom: '20px',
        marginX: '20px',
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
    const skillBoxStyle={
        border : '1px solid',
        borderLeft: '0px',
        borderRight: '0px',
        paddingY: '10px',
        marginY: '5px',
        borderColor: theme.palette.secondary.main,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
    const styleSpecChar = {
        color: theme.palette.text.special, 
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.h3.fontWeight,
        letterSpacing: theme.typography.h3.letterSpacing, 
        fontSize: theme.typography.h3.fontSize,
    }

    const cardActiontyle = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
    }

    const snackBarStyle = {
        width: '100%',
        backgroundColor: theme.palette.error.main,
    }

    
    const [open, setOpen] = React.useState(false);

      
    const printSkills = (skill:string) => {
        return (
            <span style={textStyle} key={skill}>{skill}<span style={textSpecStyle}>|</span></span>
        )
    }

      const handleClose = () => {
        setOpen(false);
      };

    const onCardClick = (project: typeof projects[0]) => {
        if(!project.isPrivate){
            window.open(project.link);
            return;
        }     
        setOpen(true);  
        console.log("open", open);
        return;
    }

    const showProjectCards = (type:string) => {
       

        const projectCards = projects.map((project,index) => {
            //if prop on only show the first three
            if(index > 2 && !ShowAll){
                return;
            }

            if(ShowSections && project.type !== type){
                return;
            } 
            
            project.type === "Algorithm" && numCardAlgo++;
            project.type === "Application" && numCardApp++;
            project.type === "Machine Learning" && numCardML++;

            return (
                <>
                
                    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}   anchorOrigin={{ vertical: 'top',  horizontal: 'right', }}>
                        <Alert onClose={handleClose} severity="error" sx={snackBarStyle} icon={<ErrorOutlineIcon sx={{color:theme.palette.text.primary}} />}>
                            <Typography variant="body2" sx={textStyle}>
                                {"This repository is private."}
                            </Typography>
                        </Alert>
                    </Snackbar>
            
                    <Card sx={cardContentStyle}>
                        <CardActionArea sx={cardActiontyle}>               
                            <CardMedia
                            component="img"
                            height="200"
                            image={project.image}
                            alt="green iguana"
                            onClick={() => onCardClick(project)}
                            />
                            <CardContent sx ={{}}>
                                <Typography gutterBottom variant="h5" component="div" sx={headerStyle}>
                                    {project.title}
                                </Typography>
                                <Box sx={skillBoxStyle}>
                                    {project.skills.map((skill) => printSkills(skill))}
                                </Box>
                                <Typography variant="body2" sx={textStyle}>
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>     
                </>
            )
            })    
        return projectCards;
    }


    return (
        <>
            {!ShowSections &&
                <Box  sx={cardContainerStyle}>
                    {showProjectCards("All")}
                </Box>
            }

            {ShowSections &&
                <>                
                    <Grid sx={{marginTop:"10px"}}>
                        <Typography sx={headerStyle}>
                            <span style={styleSpecChar}>#</span>
                            <Typical
                                steps={[500,"applications", 5000]}
                                loop={1}
                                wrapper="span"
                            />  
                        </Typography>
                    </Grid>
                    <Box sx={cardContainerStyle}>
                        {showProjectCards("Application")}
                    </Box>
                    <Grid sx={{marginTop:"10px"}}>
                        <Typography sx={headerStyle}>
                            <span style={styleSpecChar}>#</span>
                            <Typical
                                steps={[500,"algorithms", 5000]}
                                loop={1}
                                wrapper="span"
                            />  
                        </Typography>
                    </Grid>
                    <Box sx={[cardContainerStyle]}>
                        {showProjectCards("Algorithm")}
                    </Box>
                    <Grid sx={{marginTop:"10px"}}>
                        <Typography sx={headerStyle}>
                            <span style={styleSpecChar}>#</span>
                            <Typical
                                steps={[500,"machine-learning", 5000]}
                                loop={1}
                                wrapper="span"
                            />  
                        </Typography>
                    </Grid>
                    <Box sx={cardContainerStyle}>
                        {showProjectCards("Machine Learning")}
                    </Box>
                </>
            }
        </>
        
    )

}

export default ProjectCard;