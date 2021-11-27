import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { waitFor } from '@testing-library/react';

import { render, screen } from '../../../utils/test-utils';

import UserPosts from '../../../pages/userPosts';

import { payloadPosts } from '../../../utils/test-mocks';
import userEvent from "@testing-library/user-event";

// Lets define our possible handlers of msw
const allPostsOfUserHandler = rest.get('https://jsonplaceholder.typicode.com/posts',
    (req, res, ctx) => {
        return res(ctx.json(payloadPosts), ctx.delay(150));
});

const allPostsOfUserException = rest.get('https://jsonplaceholder.typicode.com/posts',
    (req, res, ctx) => {
        return res(ctx.status(402));
});

// We use msw to intercept the network request during the test,
// and return the response after 150ms when receiving a get request to the `/users` endpoint
const handlers = [
    allPostsOfUserHandler,
    allPostsOfUserException,
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset router dom with useParams and
beforeEach(() => {
    jest.resetModules();
});

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        userId: '3',
    }),
    useRouteMatch: () => ({ url: '/3/posts' }),
}));

describe('Get User Posts', () => {
    // Mock location and params
    test('fetches & receives specific user post', async () => {
        // Chose handler
        server.use(allPostsOfUserHandler);

        render(<UserPosts />);

        await waitFor(() => {
            // Title
            expect(screen.getByText('dolor sint quo a velit explicabo quia nam')).toBeInTheDocument();
        });
    });

    test('loading & error', async () => {
        server.use(allPostsOfUserException);

        render(<UserPosts/>);

        // Loading
        const linkElement = screen.getByTestId('circular-element');
        expect(linkElement).toBeInTheDocument();

        await waitFor(() => {
            // Error
            expect(screen.getByAltText('not-found')).toBeInTheDocument();
        });
    });
});

describe('Modal', () => {
    test('Open Modal and Close',  async () => {
        // Chose handler
        server.use(allPostsOfUserHandler);
        render(<UserPosts />);

        await waitFor(() => {
            userEvent.click(screen.getByText('Add a Post'));
        });

        const modalElement = screen.getByTestId('modal');
        expect(modalElement).toBeInTheDocument();

        await waitFor(() => {
            // Click outside of modal
            userEvent.click(document.body);
        });

        // Button to open modal appears again
        const openModalElement = screen.getByText('Add a Post');
        expect(openModalElement).toBeInTheDocument();
    });
});
