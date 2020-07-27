import React from 'react'
import ReactDOM from 'react-dom'
import Main from '../components/Main'
import renderer from 'react-test-renderer'

test('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Main />, div);
    ReactDOM.unmountComponentAtNode(div);
});
test('snapshot', () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
});