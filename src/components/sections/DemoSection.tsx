import React from 'react';
import '../../App.css';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import {theme} from '../../assets/theme';
import { DemoStatus, demoStatuses } from '../../const/constants';

 const DemoSection = () => {
    
    const containerDemoStyle = {
        display: 'flex',
        width:'100%',
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        gap: '18px'
    }
    const demoBoxStyle = {
        border: '2px dashed',
        borderColor: theme.palette.secondary.main,
        display: 'flex',
        width:'100%',
    }
    const demoPlaceholderStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        minHeight: '260px',
        padding: '18px 16px',
        gap: '10px',
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

    const renderDemoStatus = (demo: DemoStatus) => {
        const statusLabel = `status: ${demo.status}`;

        return (
            <React.Fragment key={demo.title}>
                <Grid xs={12}>
                    <Typography sx={headerStyle} className="terminal-heading">
                        <span className="terminal-prompt">jp@linux:~$</span>
                        <span style={styleSpecChar} className="terminal-cursor">#</span>
                        <span>{demo.title}</span>
                        <span className="terminal-cursor">█</span>
                    </Typography>
                </Grid>
                <Grid xs={12} md={12} sx={demoBoxStyle} className={`demo-status-card demo-status-card--${demo.status}`}>
                    <Box sx={demoPlaceholderStyle} className="terminal-output demo-status-panel">
                        <Typography sx={headerStyle} className="demo-status-badge">
                            {statusLabel}
                        </Typography>
                        <Typography sx={headerStyle} className="demo-status-note">
                            {demo.note}
                        </Typography>
                        <Typography sx={headerStyle} className="demo-status-cta">
                            {demo.ctaLabel}
                            {demo.ctaCommand && (
                                <span className="terminal-command-muted">{demo.ctaCommand}</span>
                            )}
                        </Typography>
                    </Box>
                </Grid>
            </React.Fragment>
        );
    };

    return (
        <Box sx={containerDemoStyle} id="demos">
            {demoStatuses.map((demo) => renderDemoStatus(demo))}
        </Box>
    )
}
export default DemoSection;
