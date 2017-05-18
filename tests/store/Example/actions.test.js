import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import configureStore from '../configureStore.mock';

import * as actions from '../../../src/store/Example/actions';

describe('actions', () => {
    it('should create an action to request examples', () => {
        const expected = {
            type: actions.fetchExamplesRequest.toString()
        };

        expect(actions.fetchExamplesRequest()).toEqual(expected);
    });

    it('should create an action to handle successfull request for examples', () => {
        const expected = {
            type: actions.fetchExamplesSuccess.toString()
        };

        expect(actions.fetchExamplesSuccess()).toEqual(expected);
    });

    it('should create an action to handle failed request for examples', () => {
        const expected = {
            type: actions.fetchExamplesFailure.toString()
        };

        expect(actions.fetchExamplesFailure()).toEqual(expected);
    });
});

describe('async actions', () => {
    const mock = new MockAdapter(axios);

    afterEach(() => mock.reset());

    it('should dispatch FETCH_EXAMPLES_SUCCESS when fetching examples succeeds', () => {
        mock
            .onGet('/examples')
            .reply(200, { examples: [{ id: 1, name: 'Lorem' }] });

        const store = configureStore();

        return store.dispatch(actions.fetchExamples())
            .then(() => {
                const expected = [
                    {
                        type: actions.fetchExamplesRequest.toString()
                    },
                    {
                        type: actions.fetchExamplesSuccess.toString(),
                        payload: {
                            entities: {
                                examples: {
                                    1: { id: 1, name: 'Lorem' }
                                }
                            },
                            result: [1]
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('should dispatch FETCH_EXAMPLES_FAILURE when fetching examples fails', () => {
        mock
            .onGet('/examples')
            .reply(500);

        const store = configureStore();

        return store.dispatch(actions.fetchExamples())
            .then(() => {
                const expected = [
                    { type: actions.fetchExamplesRequest.toString() },
                    { type: actions.fetchExamplesFailure.toString() }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});
