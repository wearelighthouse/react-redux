import reducers from '../../../src/store/Entity/reducers';

describe('reducers', () => {
    it('should return the initial state', () => {
        const expected = {
            examples: {}
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });

    it('should merge entities when in payload', () => {
        const state = { examples: {} };

        const expected = {
            examples: {
                1: { id: 1, name: 'Lorem' }
            }
        };

        const action = {
            type: 'ANY_OLD_TYPE',
            payload: {
                entities: {
                    examples: {
                        1: { id: 1, name: 'Lorem' }
                    }
                },
                result: [1]
            }
        };

        expect(reducers(state, action)).toEqual(expected);
    });
});
