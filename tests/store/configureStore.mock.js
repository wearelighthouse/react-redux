import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as api from '../../src/store/api';

const configureStore = initialState => {
    const mockStore = configureMockStore([thunk.withExtraArgument(api)]);

    return mockStore(initialState);
};

export default configureStore;
