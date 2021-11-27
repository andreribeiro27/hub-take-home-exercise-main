import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { waitFor } from '@testing-library/react';

import { render, screen } from '../../../utils/test-utils';

import AllUsers from '../../../pages/allUsers';

import { payloadUsers } from '../../../utils/test-mocks';

// Lets define our possible handlers of msw
const allUsersHandler = rest.get('https://jsonplaceholder.typicode.com/users',
    (req, res, ctx) => {
        return res(ctx.json(payloadUsers), ctx.delay(150));
    });

const allUsersException = rest.get('https://jsonplaceholder.typicode.com/users',
    (req, res, ctx) => {
        return res(ctx.status(402));
    });

// We use msw to intercept the network request during the test,
// and return the response after 150ms when receiving a get request to the `/users` endpoint
const handlers = [
    allUsersHandler,
    allUsersException,
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('Render all users and Posts of user', () => {
    test('fetches & receives all users', async () => {
        // Chose handler
        server.use(allUsersHandler);

        render(<AllUsers />);

        await waitFor(() => {
            // Users names
            expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
            expect(screen.getByText('Ervin Howell')).toBeInTheDocument();
        });
    });

    test('loading & error of all users', async () => {
        // Chose handler
        server.use(allUsersException);

        render(<AllUsers />);

        // Loading
        const linkElement = screen.getByTestId('circular-element');
        expect(linkElement).toBeInTheDocument();

        await waitFor(() => {
            // Error
            expect(screen.getByAltText('not-found')).toBeInTheDocument();
        });
    });
});