import React from 'react'

function TableRow(props) {

    const { phone, id, lastName, firstName, email } = props.personData;

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