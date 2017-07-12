import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as api from '../src/store/api';

const configureStore = initialState => {
    const mockStore = configureMockStore([thunk.withExtraArgument(api)]);

    return mockStore(initialState);
};

global.configureStore = configureStore;

class LocalStorageMock {
    constructor() {
        this.store = {};
    }

    clear() {
        this.store = {};
    }

    getItem(key) {
        return this.store[key] || null;
    }

    setItem(key, value) {
        this.store[key] = value;
    }

    removeItem(key) {
        delete this.store[key];
    }
}

global.localStorage = new LocalStorageMock;
