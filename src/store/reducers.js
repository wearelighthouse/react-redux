import { combineReducers } from 'redux';

// Reducers
import entities from './Entity/reducers';
import examples from './Example/reducers';

const reducers = combineReducers({
    entities,
    examples
});

export default reducers;
