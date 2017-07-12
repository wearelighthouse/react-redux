import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import * as actions from '../../../src/store/Example/actions';

describe('fetchExamples', () => {
    const mock = new MockAdapter(axios);

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet('/examples')
            .reply(500);

        const store = global.configureStore();

        return store.dispatch(actions.fetchExamples())
            .then(() => {
                const expected = [
                    { type: actions.fetchExamplesRequest.toString() },
                    { type: actions.fetchExamplesFailure.toString() }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet('/examples')
            .reply(200, { examples: [{ id: 1, name: 'Lorem' }] });

        const store = global.configureStore();

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
});
