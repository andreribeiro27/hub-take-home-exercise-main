import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

import notFound from '../../../assets/server-error.png';
import Link from '../../link';

import { BoxContainer, Image } from './error.styles';

const Error = ({
    src = notFound,
    message = 'Ups something went wrong!',
    hasLink = true,
    linkTo = '/',
    linkMessage = 'Go to home page',
}) => {
    return (
        <BoxContainer>
            <Image src={src} alt='not-found' />
            <Typography gutterBottom variant='h2'>
                {message}
            </Typography>
            {
                hasLink &&
                    <p>
                        <Link to={linkTo} data-testid='error-link'>
                            {linkMessage}
                        </Link>
                    </p>
            }
        </BoxContainer>
    );
};

Error.propTypes = {
    src: PropTypes.node,
    message: PropTypes.string,
    hasLink: PropTypes.bool,
    linkTo: PropTypes.string,
    linkMessage: PropTypes.string,
};

export default Error;
