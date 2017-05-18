import reducers from '../../src/store/reducers';

describe('reducers', () => {
    it('should have correct shape', () => {
        const state = reducers(undefined, {});

        expect(state.entities).toBeDefined();
        expect(state.example).toBeDefined();
    });
});
