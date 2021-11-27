import React from 'react';

import { CardHeader, Typography } from '@material-ui/core';

import { AccountCircle } from '@mui/icons-material';

import PropTypes from 'prop-types';

import Link from '../link';

import {StyledCard, StyledCardActions, StyledCardContent, StyledSvgIcon} from './userCard.styles';

const UserCard = ({ user, ...otherProps }) => {
    const { name, email, company, id } = user;
    const { name: cpName, bs, catchPhrase } = company;

    return (
        <StyledCard{ ...otherProps}>
            <CardHeader
                avatar={<StyledSvgIcon  component={AccountCircle} />}
                title={name}
                subheader={email} />
            <StyledCardContent>
                    <Typography gutterBottom variant='h6' component='div'>
                        {cpName}
                    </Typography>
                    <Typography variant='body2' color='text.secondary' data-testid='bs-element'>
                        {bs}
                    </Typography>
                    <br />
                    <Typography variant='body1' color='text.primary' data-testid='catchPhrase-element'>
                        {catchPhrase}
                    </Typography>
            <StyledCardActions>
                <Link data-testid='link' size='medium' variant='contained' color='primary' to={`/posts/${id}`}>
                    Posts
                </Link>
            </StyledCardActions>
            </StyledCardContent>
        </StyledCard>
    );
};

UserCard.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        company: PropTypes.shape({
            name: PropTypes.string,
            bs: PropTypes.string,
            catchPhrase: PropTypes.string,
        }).isRequired,
    }).isRequired,
};

export default UserCard;
