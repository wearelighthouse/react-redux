import axios from 'axios';

// Endpoint exports
export * from './Example/endpoints';

/**
 * Handles status codes 200 <= 500
 * from api requests
 */
export const checkStatus = (response, dispatch) => {
    switch (response.status) {
        default:
            return response;
    }
};

/**
 * Handles status codes >= 500
 * from api requests
 */
export const errorHandler = (dispatch) => {
	// Handle 500 errors here!
};

/**
 * An instance of axios to use for all requests
 */
export const instance = () => axios.create({
    baseURL: 'http://localhost/api',
    headers: {},
    validateStatus: status => status < 500
});
