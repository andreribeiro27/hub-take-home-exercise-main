import React from 'react';
import {Typography} from '@material-ui/core';

import PropTypes from 'prop-types';

import {StyledCard, StyledCardContent} from './post.styles';

const Post = ({ postData, ...otherProps }) => {
    const { title = '', body = '' } = postData;
    return (
        <StyledCard { ...otherProps}>
            <StyledCardContent>
                <Typography gutterBottom variant='h6' component='div' data-testid='post-title'>
                    {title}
                </Typography>
                <Typography variant='body2' data-testid='post-body'>
                    {body}
                </Typography>
            </StyledCardContent>
        </StyledCard>
    );
};

Post.propTypes = {
    postData: PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string,
    }).isRequired,
};

export default Post;