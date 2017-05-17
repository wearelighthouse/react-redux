import { normalize } from 'normalizr';
import { createAction } from 'redux-actions';

import { example as exampleSchema } from '../schema';

export const fetchExamplesRequest = createAction('FETCH_EXAMPLES_REQUEST');
export const fetchExamplesSuccess = createAction('FETCH_EXAMPLES_SUCCESS');
export const fetchExamplesFailure = createAction('FETCH_EXAMPLES_FAILURE');

export const fetchExamples = () => (dispatch, getState, api) => {
    dispatch(fetchExamplesRequest());

    return api.fetchExamples()
        .then(api.checkStatus)
        .then(response => normalize(response.data.examples, [exampleSchema]))
        .then(normalizedData => dispatch(fetchExamplesSuccess(normalizedData)))
        .catch(api.handleError(dispatch, fetchExamplesFailure));
};
