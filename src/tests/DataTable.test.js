import React from 'react'
import ReactDOM from 'react-dom'
import DataTable from '../components/DataTable'
import renderer from 'react-test-renderer'


const testData = [
    {
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
]

test('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <DataTable dataList={testData}
            activePerson={testData[0]}
            activeColumn={'id'}
        />, div);
    ReactDOM.unmountComponentAtNode(div);
});
test('snapshot', () => {
    const tree = renderer.create(<DataTable
        dataList={testData}
        activePerson={testData[0]}
        activeColumn={'id'}
    />).toJSON();
    expect(tree).toMatchSnapshot();
});