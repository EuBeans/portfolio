import React from 'react';
import '../../App.css';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import {theme} from '../../assets/theme';
import Typical from '../atoms/Typical';

 const DemoSection = () => {
    
    const containerDemoStyle = {
        display: 'flex',
        width:'100vh',
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    }
    const demoBoxStyle = {
        border: '2px dashed',
        borderColor: theme.palette.secondary.main,
        display: 'flex',
        width:'75%',
    }
    const demoPlaceholderStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '320px',
    }
    const headerStyle ={
        color: theme.palette.primary.light,
        fontSize: theme.typography.h5.fontSize,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.h3.fontWeight,
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
        <Box sx={containerDemoStyle}>
            <Grid>
                <Typography sx={headerStyle} className="terminal-heading">
                    <span className="terminal-prompt">jp@linux:~$</span>
                    <span style={styleSpecChar} className="terminal-cursor">#</span>
                    <Typical
                        steps={[500,"polygon-contour", 5000]}
                        loop={1}
                        wrapper="span"
                    />  
                </Typography>
            </Grid>
            <Grid  md={12} sx={demoBoxStyle} >
                <Box sx={demoPlaceholderStyle} className="terminal-output terminal-empty">
                    <Typography sx={headerStyle}>
                        Demo currently not available
                    </Typography>
                </Box>
            </Grid>
            <Grid>
                <Typography sx={headerStyle} className="terminal-heading">
                    <span className="terminal-prompt">jp@linux:~$</span>
                    <span style={styleSpecChar} className="terminal-cursor">#</span>
                    <Typical
                        steps={[500,"simordia-word-game", 5000]}
                        loop={1}
                        wrapper="span"
                    />  
                </Typography>
            </Grid>
            <Grid  md={12} sx={demoBoxStyle} >
                <Box sx={demoPlaceholderStyle} className="terminal-output terminal-empty">
                    <Typography sx={headerStyle}>
                        Demo currently not available
                    </Typography>
                </Box>
            </Grid>
        </Box>
    )
}
export default DemoSection;
