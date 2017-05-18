import { combineReducers } from 'redux';

// Reducers
import entities from './Entity/reducers';
import example from './Example/reducers';

const reducers = combineReducers({
    entities,
    example
});

export default reducers;
