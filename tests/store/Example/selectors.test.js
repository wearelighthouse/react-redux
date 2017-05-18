import { getExamples, getIsFetching } from '../../../src/store/Example/selectors';

describe('getExamples', () => {
    it('should return entities in order of ids from state', () => {
        const state = {
            entities: {
                examples: {
                    3: { id: 3, name: 'Dolor' },
                    1: { id: 1, name: 'Lorem' },
                    4: { id: 4, name: 'Sit' },
                    2: { id: 2, name: 'Ipsum' },
                    5: { id: 5, name: 'Amet' }
                }
            },
            example: {
                ids: [1, 2, 3, 4, 5]
            }
        };

        const expected = [
            { id: 1, name: 'Lorem' },
            { id: 2, name: 'Ipsum' },
            { id: 3, name: 'Dolor' },
            { id: 4, name: 'Sit' },
            { id: 5, name: 'Amet' }
        ];

        expect(getExamples(state)).toEqual(expected);
    });
});

describe('getIsFetching', () => {
    it('should return isFetching from state', () => {
        const state = {
            example: {
                isFetching: true
            }
        };

        expect(getIsFetching(state)).toBe(true);
    });
});
