import axios from 'axios';

// Endpoint exports
export * from './Example/endpoints';


export const checkStatus = (response, dispatch) => {
    switch (response.status) {
        default:
            return response;
    }
};

/**
 * An instance of axios to use for all requests
 */
export const instance = () => axios.create({
    baseURL: 'http://localhost/api',
    headers: {},
    validateStatus: status => status < 500
});
