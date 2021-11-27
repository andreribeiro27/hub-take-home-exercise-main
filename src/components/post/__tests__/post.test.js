import { render, screen } from '@testing-library/react';

import {createMemoryHistory} from 'history';

import {Router} from 'react-router-dom';

import Post from '../post';

test('renders a post component', () => {
    const history = createMemoryHistory();

    const postData = {
        title: 'title',
        body: 'body',
    };
    render(
        <Router location={history.location} navigator={history}>
            <Post postData={postData} />
        </Router>,
    );

    const text1Element = screen.getByText('title');
    const text2Element = screen.getByText('body');
    expect(text1Element).toBeInTheDocument();
    expect(text2Element).toBeInTheDocument();
});

test('renders a empty post component', () => {
    const history = createMemoryHistory();

    const postData = {
        title: undefined,
        body: undefined,
    };

    render(
        <Router location={history.location} navigator={history}>
            <Post postData={postData} />
        </Router>,
    );

    const text1Element = screen.getByTestId('post-title');
    const text2Element = screen.getByTestId('post-body');
    expect(text1Element).toBeEmptyDOMElement();
    expect(text2Element).toBeEmptyDOMElement();
});

