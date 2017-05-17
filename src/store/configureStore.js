import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';
import thunk from 'redux-thunk';

import * as api from './api';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = initialState => {
    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(
                thunk.withExtraArgument(api)
            )
        )
    );

    if (module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(reducers));
    }

    return store;
};

export default configureStore;
