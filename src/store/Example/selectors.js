import { createSelector } from 'reselect';

const getEntitiesExamples = state => state.entities.examples;
const getExampleIds = state => state.example.ids;

export const getExamples = createSelector(
    getEntitiesExamples,
    getExampleIds,
    (examples, ids) => ids.map(id => examples[id])
);

export const getIsFetching = state => state.example.isFetching;
