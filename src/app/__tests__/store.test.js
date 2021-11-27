import store from '../store';

describe('Build Store', () => {
    test('Build a new store', () => {
        expect(store.getState()).toEqual(expect.objectContaining({
            usersApi: expect.objectContaining({
                config: expect.objectContaining({
                    focused:expect.any(Boolean),
                    keepUnusedDataFor:expect.any(Number),
                    middlewareRegistered:expect.any(Boolean),
                    online:expect.any(Boolean),
                    reducerPath:expect.stringMatching('usersApi'),
                    refetchOnFocus:expect.any(Boolean),
                    refetchOnMountOrArgChange:expect.any(Boolean),
                    refetchOnReconnect:expect.any(Boolean),
                }),
                mutations:expect.any(Object),
                provided:expect.any(Object),
                queries:expect.any(Object),
                subscriptions:expect.any(Object),
            }),
        }));
    });
});
