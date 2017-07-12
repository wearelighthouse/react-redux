import { combineReducers } from 'redux';

// Reducers
import entities from './Entities/reducers';
import example from './Example/reducers';

const reducers = combineReducers({
    entities,
    example
});

export default reducers;
