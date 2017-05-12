import React, { PropTypes } from 'react';

const ExampleList = ({ examples }) => (
    <ul>{examples.map(example => <li key={example.id}>{example.name}</li>)}</ul>
);

ExampleList.propTypes = {
    examples: PropTypes.array.isRequired
};

export default ExampleList;
