import React, {useState} from 'react';

import {useParams} from 'react-router-dom';

import {Button, Modal} from '@material-ui/core';

import { useGetUserPostsByIdQuery, useCreatePostMutation } from '../../features/api/api-slice';

import Post from '../../components/post';

import LoadingContainer from '../../components/containers/loading';
import ErrorContainer from '../../components/containers/error';

import AddPost from '../../components/forms/addPost';

import {Section, StyledContainer, StyledBox, StyledBoxButton} from './userPosts.styles';

const UserPosts = () => {
    const [open, setOpen] = useState(false);
    const { userId } = useParams();

    const { data, error, isLoading } = useGetUserPostsByIdQuery(userId);
    const [createPost, responseInfo ] = useCreatePostMutation();

    if (isLoading || responseInfo?.isLoading) {
        return (
            <section> 
                <LoadingContainer />
            </section>
        );
    }

    if(error || responseInfo?.isError) {
        return (
            <section>
                <ErrorContainer message={error?.message} />
            </section>
        );
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (postData) => {
        createPost(postData);
        setOpen(false);
    };

    return (
        <Section>
            <StyledBoxButton>
                <Button variant='contained' onClick={handleOpen}>
                    Add a Post
                </Button>
            </StyledBoxButton>
            <StyledContainer>
                {data.map((post, index) => {
                    return (
                        <Post postData={post}  key={`${index}-user-post`} />
                    );
                })}
            </StyledContainer>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='Add post modal'
                aria-describedby='Add user post modal with title and body'
                data-testid='modal'
            >
                <StyledBox>
                    <AddPost userId={userId} onSubmit={handleSubmit} />
                </StyledBox>
            </Modal>
        </Section>
    );
};

export default UserPosts;