import React from 'react';
import PropTypes from 'prop-types';

// Hooks
import { useFormikContext } from 'formik';

// Components
import {Button} from '@material-ui/core';

/**
 * Add Formik logic to Material Button
 */
const SubmitButtonWrapper = ({ children, disabled, fullWidth = true, ...otherProps}) => {
    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    };

    const configButton = {
        ...otherProps,
        disabled: !!disabled,
        fullWidth: fullWidth,
        onClick: handleSubmit,
    };

    return (
        <Button {...configButton}>
            {children}
        </Button>
    );
};

SubmitButtonWrapper.propTypes = {
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    children: PropTypes.node,
};

export default SubmitButtonWrapper;
