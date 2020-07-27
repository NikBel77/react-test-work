import React from 'react'
import ReactDOM from 'react-dom'
import PersonInfo from '../components/PersonInfo'
import renderer from 'react-test-renderer'

const testPerson = {
    id: 101,
    firstName: 'Sue',
    lastName: 'Corson',
    email: 'DWhalley@in.gov',
    phone: '(612)211-6296',
    address: {
        streetAddress: '9792 Mattis Ct',
        city: 'Waukesha',
        state: 'WI',
        zip: '22178'
    },
    description: 'et lacus magna dolor...',
}
const shortPersonInfo = {
    id: 101,
    firstName: 'Sue',
    lastName: 'Corson',
    email: 'DWhalley@in.gov',
    phone: '(612)211-6296',
}


test('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PersonInfo personInfo={testPerson} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
test('render without crashing 2', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PersonInfo personInfo={shortPersonInfo} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
test('snapshot 1', () => {
    const tree = renderer.create(<PersonInfo personInfo={testPerson} />).toJSON();
    expect(tree).toMatchSnapshot();
});
test('snapshot 2', () => {
    const tree = renderer.create(<PersonInfo personInfo={shortPersonInfo} />).toJSON();
    expect(tree).toMatchSnapshot();
});