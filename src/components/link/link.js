import React from 'react';

import { Button } from '@material-ui/core';

import { NavLink as RouterNavLink } from 'react-router-dom';

const Link = ({children, ...otherProps}) => {
    return (
        <Button component={RouterNavLink} {...otherProps}>
            {children}
        </Button>
    );
};

export default Link;