import { render, screen } from '@testing-library/react';

import {createMemoryHistory} from 'history';

import {Router} from 'react-router-dom';

import Loading from '../loading';

test('renders a loading component with default props', () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <Loading />
        </Router>,
    );
    const circularElement = screen.getByTestId('circular-element');

    expect(circularElement).toBeInTheDocument();
});

