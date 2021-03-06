/* istanbul ignore file */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import {createMemoryHistory} from 'history';

import {Router} from 'react-router-dom';

import { usersApi } from '../features/api/api-slice';

function render(
    ui,
    {
        preloadedState,
        store =
            configureStore({
                reducer: {
                    // Add more reducers here for testing
                    [usersApi.reducerPath]: usersApi.reducer,
                },
                preloadedState,
                middleware: (getDefaultMiddleware) =>
                    getDefaultMiddleware().concat(usersApi.middleware),
            }),
        ...renderOptions
    } = {},
) {
    function Wrapper({ children }) {
        const history = createMemoryHistory();

        return (
            <Provider store={store}>
                <Router location={history.location} navigator={history}>
                    {children}
                </Router>
            </Provider>
        );
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };