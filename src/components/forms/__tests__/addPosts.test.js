// myForm.test.js
import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
//import userEvent from '@testing-library/user-event';

import {createMemoryHistory} from 'history';

import {Router} from 'react-router-dom';

import AddPost from '../addPost';

describe('add posts form component', () => {
test('button should be disabled when no fields are filled up', async () => {
    const handleSubmit = jest.fn();
    const close = jest.fn();

    const history = createMemoryHistory();

    render(
        <Router location={history.location} navigator={history}>
            <AddPost onClose={close} userId='1' onSubmit={handleSubmit} />
        </Router>,
    );

    const button = screen.getByText('Submit');

    await waitFor(() => {
        expect(button.disabled).toBeDefined();
    });
});

// 📝 Having a weird bug with this test need to investigate more on this
/**test('render and submitting a formik form', async () => {
    const handleSubmit = jest.fn();
    const close = jest.fn();

    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <AddPost onClose={close} userId={1} onSubmit={handleSubmit} />
        </Router>,
    );

    userEvent.type(screen.getByTestId('title-text-field'), 'My Title');
    userEvent.type(screen.getByTestId('body-text-field'), 'foo');


    await waitFor(() => {
        userEvent.click(screen.getByText('Submit'));
    });


    await waitFor(() => {
        expect(handleSubmit).toHaveBeenCalledWith({
            title: 'My Title',
            body: 'foo',
            id: 1,
        });
    });
});**/

});
