// this component is used to divide sections in the page 

import { Box } from '@mui/material';
import React from 'react';
import {theme} from '../assets/theme';


interface SectionDividerProps {
    children?: React.ReactNode;
}

const SectionDivider = (props: SectionDividerProps) => {
    // props to var
    const {children} = props;

    const containerStyle = {
        backgroundColor: 'Transparent',
        position: 'relative',
        paddingTop: '5vh',
        paddingBottom: '15vh',

    }

    return (
        <Box sx={containerStyle}>
            {children}
        </Box>
    );
};

export default SectionDivider;