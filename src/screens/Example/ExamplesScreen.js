import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { fetchExamples } from '../../store/Example/actions';

// Components
import ExampleList from '../../components/Example/ExampleList';

// Selectors
import { getExamples, getIsFetching } from '../../store/Example/selectors';

export class ExamplesScreen extends Component {
    componentDidMount() {
        this.props.fetchExamples();
    }

    render() {
        const { examples, isFetching } = this.props;

        return <ExampleList examples={examples} isFetching={isFetching} />;
    }
}

ExamplesScreen.propTypes = {
    examples: PropTypes.array.isRequired,
    fetchExamples: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
};

export const mapStateToProps = state => ({
    examples: getExamples(state),
    isFetching: getIsFetching(state)
});

export const mapDispatchToProps = dispatch => ({
    fetchExamples: () => dispatch(fetchExamples())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExamplesScreen);
