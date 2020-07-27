import React from 'react'
import ReactDOM from 'react-dom'
import ControlPanel from '../components/ControlPanel'
import renderer from 'react-test-renderer'

test('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ControlPanel />, div);
    ReactDOM.unmountComponentAtNode(div);
});
test('snapshot', () => {
    const tree = renderer.create(<ControlPanel />).toJSON();
    expect(tree).toMatchSnapshot();
});