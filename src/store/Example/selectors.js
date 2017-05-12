import { createSelector } from 'reselect';

const getExampleEntities = state => state.entities.examples;
const getExampleIds = state => state.examples.ids;

export const getExamples = createSelector(
    getExampleEntities,
    getExampleIds,
    (examples, ids) => ids.map(({ id }) => examples[id])
);
