import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import NotFound from '../notFound';

it('renders not found page', async () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <NotFound />
        </Router>,
    );

    const errorElement = screen.getByText('Your going the wrong way!');

    expect(errorElement).toBeInTheDocument();
});
