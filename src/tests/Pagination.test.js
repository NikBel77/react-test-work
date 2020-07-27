import React from 'react'
import ReactDOM from 'react-dom'
import Pagination from '../components/Pagination'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'

test('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Pagination
        numberOfPages={10}
        currentPage={5}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
});
test('no render with 1 page', () => {
    const { queryByText } = render(<Pagination
        numberOfPages={1}
        currentPage={1}
    />);
    expect(queryByText(/^\d+$/)).toBeNull();
});
test('snapshot', () => {
    const tree = renderer.create(<Pagination
        numberOfPages={10}
        currentPage={5}
    />).toJSON();
    expect(tree).toMatchSnapshot();
});