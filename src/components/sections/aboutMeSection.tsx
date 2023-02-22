import React, { useEffect } from 'react';
import '../../App.css';
import Box from '@mui/material/Box';
import { Grid} from '@mui/material';
import {theme} from '../../assets/theme';
import Typography from '@mui/material/Typography';
import Typical from 'react-typical'
import SectionDivider from '../molecules/SectionDivider';
import { useInView } from "react-intersection-observer";
import 'react-awesome-slider/dist/styles.css';
import secondPicture from '../../assets/images/secondPicture.jpg';
import ImageBox from '../molecules/imageBox';
import {aboutMeDescription} from '../../const/constants';


interface AboutMeSectionProps {
    showHeader?: boolean;
}
const AboutMeSection = (props:AboutMeSectionProps) => {
    const {showHeader} = props;
    const SPEED = 1.5;
    const [ref, inView] = useInView();
    const [stateTyper, setstateTyper] = React.useState(0);

    useEffect(() => {
        if(inView){
            setstateTyper(1);
        }
        else{
            setstateTyper(0);
        }
      }, [inView]);

    let description = aboutMeDescription.split(/\\n/g);
    

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
        width: '300px',
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

    const styleSpecHeaderChar = {
    color: theme.palette.text.special, 
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.h3.fontWeight,
    letterSpacing: theme.typography.h3.letterSpacing, 
    fontSize: theme.typography.h3.fontSize,
    }

    const styleSpecChar = {
        color: theme.palette.text.special, 
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.body2.fontWeight,
        letterSpacing: theme.typography.h3.letterSpacing, 
        fontSize: theme.typography.body2.fontSize,
        }
    

    const aboutTextStyle ={
        color: theme.palette.text.secondary,
        fontSize: theme.typography.body2.fontSize,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.body2.fontWeight,
        letterSpacing: theme.typography.body1.letterSpacing,
    }

    return (
        <SectionDivider>
            {showHeader &&
                <Grid  md={12}  sx={boxHeaderStyle}>
                    <Grid>
                    <Typography sx={headerStyle}>
                        <span ref={ref} style={styleSpecHeaderChar}>#</span><Typical
                                    steps={[500,"about-me", 5000]}
                                    loop={stateTyper}
                                    wrapper="span"
                                />  
                    </Typography>
                    </Grid>
                    <Grid>
                        <Box sx={boxHeaderBorderStyle}/>
                    </Grid>
                
                </Grid>
            }
            <Grid container md={12} sx={{justifyContent:"center",alignItems:"center", paddingTop: showHeader ? "0px": "50px"}}>
                <Grid  md={8} order={{xs:1,sm:1, md:1}} >
                    <Box sx={{paddingX:"20px"}}>
                        <Typography sx={aboutTextStyle}>
                            {description.map((description,index) => {
                                return(
                                    <>
                                        <span style={ styleSpecChar}>//</span>
                                        <span key={index}>
                                            {description}
                                            <br/>
                                            <br/>
                                        </span>
                                    </>
                                )
                            })
                            }
                        </Typography>
                    </Box>
                </Grid>
                <Grid  md={4} order={{xs:1,sm:1, md:1}} >
                   <ImageBox
                        image={secondPicture}
                        speed= {SPEED}
                   />
                </Grid>
            </Grid>
        </SectionDivider>
    )

}

export default AboutMeSection;