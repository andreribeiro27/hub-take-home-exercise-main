import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import MainNavigation from '../mainNavigation';

it('renders mainNavigation', async () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <MainNavigation />
        </Router>,
    );

    const headerElement = screen.getByTestId('header-element');

    expect(headerElement).toBeInTheDocument();
});
