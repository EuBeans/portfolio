// this component is used to divide sections in the page 

import { Box } from '@mui/material';
import React from 'react';


interface SectionDividerProps {
    children?: React.ReactNode;
    id?: string;
    className?: string;
}

const SectionDivider = (props: SectionDividerProps) => {
    // props to var
    const {children, id, className} = props;
    const sectionClassName = className ? `terminal-section ${className}` : "terminal-section";

    const containerStyle = {
        backgroundColor: 'transparent',
        position: 'relative',
        paddingTop: '0vh',
        paddingBottom: { xs: '3vh', md: '5vh' },
    }

    return (
        <Box sx={containerStyle} id={id} className={sectionClassName}>
            {children}
        </Box>
    );
};

export default SectionDivider;
