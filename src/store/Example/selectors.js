import { createSelector } from 'reselect';

const getExamplesEntities = state => state.entities.examples;
const getExamplesIds = state => state.examples.ids;

export const getExamples = createSelector(
    getExamplesEntities,
    getExamplesIds,
    (examples, ids) => ids.map(id => examples[id])
);

export const getIsFetching = state => state.examples.isFetching;
