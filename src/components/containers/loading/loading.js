import React from 'react';

import {CircularProgress} from '@material-ui/core';

import { BoxContainer } from './loading.styles';

const Loading = () => {
    return (
        <BoxContainer>
            <CircularProgress data-testid='circular-element' />
        </BoxContainer>
    );
};

export default Loading;
