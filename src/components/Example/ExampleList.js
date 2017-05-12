import React from 'react';
import PropTypes from 'prop-types';

const ExampleList = ({ examples, isFetching }) => {
    if (isFetching) {
        return <p>Loading...</p>;
    }

    return <ul>{examples.map(example => <li key={example.id}>{example.name}</li>)}</ul>;
};

ExampleList.propTypes = {
    examples: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
};

export default ExampleList;
