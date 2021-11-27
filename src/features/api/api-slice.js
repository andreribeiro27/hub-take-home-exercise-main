import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
        reducerPath: 'usersApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
        endpoints: (builder) => ({
            getUsers: builder.query({
                query: () => '/users',
            }),
            getUserPostsById:
                builder.query({
                    query: (id) => `/posts?userId=${id}`,
            }),
            createPost:
                builder.mutation({
                    query: (postData) => ({
                        url: 'posts',
                        method: 'POST',
                        body: postData,
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    }),
                }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
//
// 📝 for builder.query -> use[name]Query
// 📝 for builder.mutation -> use[name]Mutation
export const {
    useGetUsersQuery,
    useGetUserPostsByIdQuery,
    useCreatePostMutation,
} = usersApi;
