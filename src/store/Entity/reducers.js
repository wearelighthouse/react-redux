import merge from 'lodash/merge';

const initialState = {
    examples: {}
};

const reducers = (state = initialState, action) => {
    if (action.payload && action.payload.entities) {
        return merge({}, state, action.payload.entities);
    }

    return state;
};

export default reducers;
