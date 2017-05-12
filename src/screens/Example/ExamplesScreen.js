import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchExamples } from '../../store/Example/actions';

// Components
import ExampleList from '../../components/Example/ExampleList';

// Selectors
import { getExamples } from '../../store/Example/selectors';

class ExamplesScreen extends Component {
    componentDidMount() {
        this.props.fetchExamples();
    }

    render() {
        return <ExampleList examples={this.props.examples} />;
    }
}

ExamplesScreen.propTypes = {
    examples: PropTypes.array.isRequired,
    fetchExamples: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    examples: getExamples(state)
});

const mapDispatchToProps = dispatch => ({
    fetchExamples: () => dispatch(fetchExamples())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExamplesScreen);
