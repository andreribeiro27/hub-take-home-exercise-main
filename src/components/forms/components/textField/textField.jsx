import React from 'react';
import PropTypes from 'prop-types';

// Hooks
import { useField } from 'formik';

// Components
import {TextField} from '@material-ui/core';

/**
 * Add Formik logic to Material TextField
 */
const TextFieldWrapper = ({
    dataTest = 'text-field', // only for testing
    name,
    ...otherProps
}) => {
    const [field, meta] = useField(name);

    const configTextField = {
        ...field,
        ...otherProps,
        fullWidth: true,
    };

    // pass yup validations to material ui component
    if (meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }

    return (
        <TextField {...configTextField} data-testid={dataTest}/>
    );
};

TextFieldWrapper.propTypes = {
    name: PropTypes.string.isRequired,
    dataTest: PropTypes.string,
};

export default TextFieldWrapper;
