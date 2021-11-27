import { render, screen } from '@testing-library/react';

import {createMemoryHistory} from 'history';

import {Router} from 'react-router-dom';

import App from '../App';

test('renders app component', () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <App />
        </Router>,
    );
    const text1Element = screen.getByTestId('header-element');

    expect(text1Element).toBeInTheDocument();
});