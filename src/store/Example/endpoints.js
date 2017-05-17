import { instance } from '../api';

export const fetchExamples = () => instance().get('/examples');
