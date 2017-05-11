import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import * as api from './api';
import reducers from './reducers';

const configureStore = initialState => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(
            thunk.withExtraArgument(api)
        )
    );

    if (module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(reducers));
    }

    return store;
};

export default configureStore;
