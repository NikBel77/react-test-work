import React from 'react'

function TableRow(props) {

    const phone = props.personData.phone || 'no data';
    const id = props.personData.id || 'no data';
    const lastName = props.personData.lastName || 'no data';
    const firstName = props.personData.firstName || 'no data';
    const email = props.personData.email || 'no data';

    return (
        <tr
            onClick={ () => props.onIdChange(props.personData) }
            className={ props.isSelected ? 'bg-danger' : '' }>
            <td>{ id }</td>
            <td>{ firstName }</td>
            <td>{ lastName }</td>
            <td>{ email }</td>
            <td>{ phone }</td>
        </tr>
    )
}

export default TableRow