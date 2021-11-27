import { configureStore } from '@reduxjs/toolkit';

import { usersApi } from '../features/api/api-slice';

const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
    },

    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
});

export default store;