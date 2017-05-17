import axios from 'axios';

// Endpoint exports
export * from './Example/endpoints';

export const checkStatus = response => {
    if (response.status >= 200 &&
        response.status < 300
    ) {
        return response;
    }

    throw response;
};

export const handleError = (dispatch, failure) => response => {
    dispatch(failure());

    switch (response.status) {
        case 400:
            break;

        case 401:
            break;

        case 403:
            break;

        default:
    }
};

/**
 * An instance of axios to use for all requests
 */
export const instance = () => axios.create({
    baseURL: 'http://localhost:9000',
    headers: {},
    validateStatus: () => true
});
