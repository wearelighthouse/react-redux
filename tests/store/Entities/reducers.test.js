import reducers from '../../../src/store/Entities/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            examples: {}
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('cache', () => {
    it('ANY_OLD_TYPE', () => {
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
