import { render, screen } from '@testing-library/react';

import {createMemoryHistory} from 'history';

import {Router} from 'react-router-dom';

import Error from '../error';

import serverError from '../../../../assets/server-error.png';

test('renders a error component with default props', () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <Error />
        </Router>,
    );
    const text1Element = screen.getByText('Ups something went wrong!');
    const text2Element = screen.getByText('Go to home page');
    const linkElement = screen.getByTestId('error-link');
    const imageElement = screen.getByAltText('not-found');

    expect(text1Element).toBeInTheDocument();
    expect(text2Element).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
});

test('renders a error component with different props', () => {
    const history = createMemoryHistory();

    render(
        <Router location={history.location} navigator={history}>
            <Error message='foo1' src={serverError} hasLink={false} />
        </Router>,
    );
    const text1Element = screen.getByText('foo1');

    // use `queryBy` to avoid throwing an error with `getBy`
    const text2Element = screen.queryByText('Go to home page');
    const linkElement = screen.queryByText('error-link');
    const imageElement = screen.getByAltText('not-found');

    expect(text1Element).toBeInTheDocument();
    expect(text2Element).not.toBeInTheDocument();
    expect(linkElement).not.toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
});
