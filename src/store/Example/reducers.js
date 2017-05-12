import { combineReducers } from 'redux';

import * as actions from './actions';

const isFetching = (state = false, action) => {
    switch (action.type) {
        case actions.fetchExamplesRequest.toString():
            return true;

        case actions.fetchExamplesSuccess.toString():
        case actions.fetchExamplesFailure.toString():
            return false;

        default:
            return state;
    }
};

const ids = (state = [], action) => {
    switch (action.type) {
        case actions.fetchExamplesSuccess.toString():
            return action.payload.result;

        default:
            return state;
    }
};

const reducers = combineReducers({
    ids,
    isFetching
});

export default reducers;
