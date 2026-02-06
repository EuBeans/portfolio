// this component is used to divide sections in the page 

import { Box } from '@mui/material';
import React from 'react';
import {theme} from '../../assets/theme';


interface SectionDividerProps {
    children?: React.ReactNode;
    id?: string;
    className?: string;
}

const SectionDivider = (props: SectionDividerProps) => {
    // props to var
    const {children, id, className} = props;

    const containerStyle = {
        backgroundColor: 'Transparent',
        position: 'relative',
        paddingTop: '0vh',
        paddingBottom: '5vh',

    }

    return (
        <Box sx={containerStyle} id={id} className={className}>
            {children}
        </Box>
    );
};

export default SectionDivider;
