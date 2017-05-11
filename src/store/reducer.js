import { combineReducers } from 'redux';

import entities from './Entity/reducers';

const reducers = combineReducers({
    entities
});

export default reducers;
