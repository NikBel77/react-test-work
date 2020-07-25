import React from 'react'

function PersonInfo(props) {

    if (props.personInfo) {
        if (!props.personInfo.description || !props.personInfo.address) {
            return (
                <div className='container'>
                    <p>no user address</p>
                </div>
            )
        }

        const name = `${props.personInfo.firstName} ${props.personInfo.lastName}`;
        const { city, state, streetAddress, zip } = props.personInfo.address;
        const description = props.personInfo.description;

        return (
            <div className='container'>
                <div className='selectedPerson'>
                    Selected user: <b>{name}</b><br />
                    Description:<br />
                    <textarea value={description} readOnly="readonly"></textarea>
                    <address>
                        City: <b>{city}</b><br />
                        State: <b>{state}</b><br />
                        Address: <b>{streetAddress}</b><br />
                        Zip: <b>{zip}</b><br />
                    </address>
                </div>
            </div>
        )
    } else {
        return (
            <div className='container'>
                <p>no user selected</p>
            </div>
        )
    }

}

export default PersonInfo