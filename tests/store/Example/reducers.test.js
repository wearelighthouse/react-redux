import reducers from '../../../src/store/Example/reducers';

import * as actions from '../../../src/store/Example/actions';

describe('reducers', () => {
    it('should return the initial state', () => {
        const expected = {
            ids: [],
            isFetching: false
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });

    it('should handle FETCH_EXAMPLES_REQUEST', () => {
        const state = {
            ids: [],
            isFetching: false
        };

        const expected = {
            ids: [],
            isFetching: true
        };

        expect(reducers(state, actions.fetchExamplesRequest())).toEqual(expected);
    });

    it('should handle FETCH_EXAMPLES_FAILURE', () => {
        const state = {
            ids: [],
            isFetching: true
        };

        const expected = {
            ids: [],
            isFetching: false
        };

        expect(reducers(state, actions.fetchExamplesFailure())).toEqual(expected);
    });

    it('should handle FETCH_EXAMPLES_SUCCESS', () => {
        const state = {
            ids: [],
            isFetching: true
        };

        const expected = {
            ids: [1],
            isFetching: false
        };

        const payload = {
            entities: {
                examples: {
                    1: { id: 1, name: 'Lorem' }
                }
            },
            result: [1]
        };

        expect(reducers(state, actions.fetchExamplesSuccess(payload))).toEqual(expected);
    });
});
