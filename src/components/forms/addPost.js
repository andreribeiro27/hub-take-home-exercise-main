import React  from 'react';
import PropTypes from 'prop-types';

import { Formik,  Form } from 'formik';
import * as yup from 'yup';

// Material UI
import {Grid, Typography} from '@material-ui/core';

// Form Components
import Submit from './components/submit';

import {StyledTextField, SubmitContainer, TitleContainer} from './addPost.styles';

const validationSchema = yup.object().shape({
    title: yup.string().required('Please insert a title'),
    body: yup.string().required('Please insert a description'),
});

export const AddPost = ({ userId, onSubmit }) => {
    // Form state already has the correct post structure
    const initialFormState = {
        title: '',
        body: '',
        userId: userId,
    };

    const handleSubmit = async (values) => {
        onSubmit(values);
    };

    return (
        <Grid container direction='column' justifyContent='center'>
            <Grid container justifyContent='center'>
                <TitleContainer item xs={10}>
                    <Typography variant='h5'>Add User</Typography>
                </TitleContainer>
            </Grid>
            <Formik
                validateOnMount
                initialValues={initialFormState}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {({ isSubmitting, dirty }) => {
                    return (
                        <Form>
                            <Grid container justifyContent='center' spacing={2}>
                                <Grid item xs={10}>
                                <StyledTextField
                                    dataTest='title-text-field'
                                    name='title'
                                    label='Post title' />
                                </Grid>
                                <Grid item xs={10}>
                                    <StyledTextField
                                        dataTest='body-text-field'
                                        name='body'
                                        label='Write something !'
                                        multiline
                                        rows={7} />
                                </Grid>
                                <SubmitContainer item container xs={10}>
                                    <Submit variant='contained' disabled={isSubmitting || !dirty}>
                                        Submit
                                    </Submit>
                                </SubmitContainer>
                            </Grid>
                        </Form>);
                }}
            </Formik>
        </Grid>
    );
};

AddPost.propTypes = {
    userId: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default AddPost;
