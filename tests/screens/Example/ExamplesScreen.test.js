import React from 'react';
import { mount, shallow } from 'enzyme';

import {
    ExamplesScreen,
    mapStateToProps,
    mapDispatchToProps
} from '../../../src/screens/Example/ExamplesScreen';

describe('ExamplesScreen', () => {
    const props = {
        examples: [{ id: 1, name: 'Lorem' }],
        fetchExamples: jest.fn(),
        isFetching: false
    };

    it('render', () => {
        const wrapper = shallow(<ExamplesScreen {...props} />);
        const exampleListProps = wrapper.find('ExampleList').props();

        expect(exampleListProps.examples).toEqual(props.examples);
        expect(exampleListProps.isFetching).toEqual(props.isFetching);
    });

    it('componentDidMount', () => {
        expect(props.fetchExamples.mock.calls.length).toBe(0);
        mount(<ExamplesScreen {...props} />);
        expect(props.fetchExamples.mock.calls.length).toBe(1);
    });
});

describe('mapStateToProps', () => {
    it('shape', () => {
        const props = mapStateToProps({
            entities: { examples: [] },
            example: { ids: [], isFetching: false }
        });

        expect(props.examples).toBeDefined();
        expect(props.isFetching).toBeDefined();
    });
});

describe('mapDispatchToProps', () => {
    it('shape', () => {
        const store = global.configureStore();

        const props = mapDispatchToProps(store.dispatch);

        expect(props.fetchExamples).toBeDefined();
    });
});
