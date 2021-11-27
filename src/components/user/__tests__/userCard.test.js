import { render, screen } from '@testing-library/react';

import {createMemoryHistory} from 'history';

import { Router } from 'react-router-dom';

import userEvent from '@testing-library/user-event';

import UserCard  from '../userCard';

const defaultUserData = {
    name: 'name',
    email: 'email',
    company: {
        cpName: 'cpName',
        bs: 'bs',
        catchPhrase: 'catchPhrase',
    },
    id: 1,
};

test('renders a userCard component', () => {
    const history = createMemoryHistory();

    render(
        <Router location={history.location} navigator={history}>
            <UserCard user={defaultUserData} />
        </Router>,
    );

    const text1Element = screen.getByText('name');
    const text2Element = screen.getByText('email');
    expect(text1Element).toBeInTheDocument();
    expect(text2Element).toBeInTheDocument();
});

test('renders a userCard with some empty props', () => {
    const history = createMemoryHistory();

    const userData = {
        name: 'name',
        email: 'email',
        company: {
            cpName: 'cp',
            bs: null,
            catchPhrase: null,
        },
        id: 1,
    };

    render(
        <Router location={history.location} navigator={history}>
            <UserCard user={userData} />
        </Router>,
    );

    const text1Element = screen.getByTestId('bs-element');
    const text2Element = screen.getByTestId('catchPhrase-element');
    expect(text1Element).toBeEmptyDOMElement();
    expect(text2Element).toBeEmptyDOMElement();
});

test('click a userCard', () => {
    const history = createMemoryHistory();

    render(
        <Router location={history.location} navigator={history}>
             <UserCard user={defaultUserData} />
        </Router>,
    );

    userEvent.click(screen.getByTestId('link'));

    expect(history.location.pathname).toEqual('/posts/1');
});
