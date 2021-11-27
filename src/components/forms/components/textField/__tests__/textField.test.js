import React from 'react';

import { render, screen } from '@testing-library/react';

import { createMemoryHistory } from 'history';

import { Router } from 'react-router-dom';

import TextField from '../textField';

//jest.mock('formik');
jest.mock('formik', () => ({
    ...jest.requireActual('formik'),
    useField: ((name) => {
        return [{},{ touched: false, error: false }, {}];
    }),
}));

afterEach(() => {
    jest.clearAllMocks();
});

test('renders a text field component', () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <TextField
                name='title'
                label='Post title' />
        </Router>,
    );
    const buttonElement = screen.getByTestId('text-field');

    expect(buttonElement).toBeInTheDocument();
});

test('renders a text field component with a error', () => {

    jest.mock('formik', () => ({
        ...jest.requireActual('formik'),
        useField: ((name) => {
            return [{},{ touched: true, error: { message: 'error' } }, {}];
        }),
    }));

    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <TextField
                name='title'
                label='Post title' />
        </Router>,
    );
    const buttonElement = screen.getByTestId('text-field');

    expect(buttonElement).toBeInTheDocument();
});