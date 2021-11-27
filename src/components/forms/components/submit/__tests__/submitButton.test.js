import {render, screen} from '@testing-library/react';

import { createMemoryHistory } from 'history';

import { Router } from 'react-router-dom';

import userEvent from '@testing-library/user-event';

import SubmitButton from '../submitButton';

jest.mock('formik', () => ({
    ...jest.requireActual('formik'),
    useFormikContext: () => ({
        submitForm: () => jest.fn(),
    }),
}));

afterEach(() => {
    jest.clearAllMocks();
});

test('renders a submit component', () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <SubmitButton> Submit </SubmitButton>
        </Router>,
    );
    const buttonElement = screen.getByText('Submit');

    userEvent.click(screen.getByText('Submit'));

    expect(buttonElement).toBeInTheDocument();
});
