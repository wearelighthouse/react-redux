// eslint-disable-next-line no-unused-vars
import { instance } from '../api';

export const fetchExamples = () => {
    // For the sake of examples
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: {
                    examples: [
                        {
                            id: 1,
                            name: 'Lorem'
                        },
                        {
                            id: 2,
                            name: 'Ipsum'
                        },
                        {
                            id: 3,
                            name: 'Dolor'
                        },
                        {
                            id: 4,
                            name: 'Sit'
                        },
                        {
                            id: 5,
                            name: 'Amet'
                        }
                    ]
                }
            });
        }, 1000);
    });

    // return instance().get('/examples.json');
};
