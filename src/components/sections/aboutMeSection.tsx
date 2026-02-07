import React from 'react';
import '../../App.css';
import Box from '@mui/material/Box';
import { Grid} from '@mui/material';
import {theme} from '../../assets/theme';
import Typography from '@mui/material/Typography';
import SectionDivider from '../molecules/SectionDivider';
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

    const description = aboutMeDescription.split(/\\n/g);
    

    const boxHeaderStyle = {
        paddingY: '30px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: { xs: 'wrap', md: 'nowrap' },
        rowGap: '10px',
    }

    const boxHeaderBorderStyle = {
        //border with only 1 straight line horizontal
        border: '1px solid',
        borderRight: '0px',
        borderLeft: '0px',
        borderTop: '0px',
        width: { xs: '160px', md: '300px' },
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
        lineHeight: 1.4,
        maxWidth: "100%",
        overflowWrap: "anywhere",
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
        fontSize: { xs: theme.typography.body1.fontSize, md: theme.typography.body2.fontSize },
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.body2.fontWeight,
        letterSpacing: theme.typography.body1.letterSpacing,
    }

    return (
        <SectionDivider id="about">
            {showHeader && (
                <Box className="terminal-header-block">
                    <Box className="terminal-status">
                        <span>status: ok</span>
                        <span>uptime: 2y</span>
                        <span>build: release</span>
                    </Box>
                    <Grid xs={12} md={12} sx={boxHeaderStyle}>
                        <Grid>
                        <Typography sx={headerStyle} className="terminal-heading">
                            <span className="terminal-prompt">jp@linux:~$</span>
                            <span style={styleSpecHeaderChar} className="terminal-cursor">#</span>
                            <span>cat about_me.txt</span>
                            <span className="terminal-cursor">█</span>
                        </Typography>
                        </Grid>
                        <Grid>
                            <Box sx={boxHeaderBorderStyle}/>
                        </Grid>
                    
                    </Grid>
                </Box>
            )}
            <Grid container xs={12} sx={{justifyContent:"center",alignItems:"center", paddingTop: showHeader ? "0px": "50px"}}>
                <Grid xs={12} md={8} order={{xs:1,sm:1, md:1}} >
                    <Box sx={{paddingX:{ xs: "12px", md: "20px" }}} className="terminal-output">
                        <Typography sx={aboutTextStyle}>
                            {description.map((line,index) => {
                                return(
                                    <React.Fragment key={`about-line-${index}`}>
                                        <span style={ styleSpecChar}>{"//"}</span>
                                        <span>
                                            {line}
                                            <br/>
                                            <br/>
                                        </span>
                                    </React.Fragment>
                                )
                            })
                            }
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} md={4} order={{xs:1,sm:1, md:1}} >
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
