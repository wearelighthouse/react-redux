import reducers from '../../../src/store/Example/reducers';

import * as actions from '../../../src/store/Example/actions';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            ids: [],
            isFetching: false
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('fetchExamples', () => {
    it(actions.fetchExamplesRequest.toString(), () => {
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

    it(actions.fetchExamplesFailure.toString(), () => {
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

    it(actions.fetchExamplesSuccess.toString(), () => {
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
