import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import userEvent from '@testing-library/user-event';

import Link from '../link';

it('renders link with default props', async () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <Link to='/test'>Click me</Link>
        </Router>,
    );

    const text1Element = screen.getByText('Click me');

    expect(text1Element).toBeInTheDocument();
});

it('click on the link and navigate', async () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <Link to='/test'>Click me</Link>
        </Router>,
    );

    userEvent.click(screen.getByText('Click me'));

    expect(history.location.pathname).toEqual('/test');
});