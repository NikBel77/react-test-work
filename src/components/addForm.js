import React from 'react'

function AddForm(props) {
    return (
        <form className='add-form'>
            <div className='form-row'>
                <div className="form-group col-md-1">
                    <label htmlFor="inputId">ID</label>
                    <input type="text" className="form-control" id="inputId" placeholder="id" data-name="id"/>
                </div>

                <div className="form-group col-md-3">
                    <label htmlFor="inputName">First name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="enter name" data-name="firstName"/>
                </div>

                <div className="form-group col-md-3">
                    <label htmlFor="inputLastName">Last name</label>
                    <input type="text" className="form-control" id="inputLastName" placeholder="enter last name" data-name="lastName"/>
                </div>

                <div className="form-group col-md-3">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="email" data-name="email"/>
                </div>

                <div className="form-group col-md-2">
                    <label htmlFor="inputPhone">Phone</label>
                    <input type="text" className="form-control" id="inputPhone" placeholder="phone" data-name="phone"/>
                </div>
            </div>

            <button 
                className="btn btn-primary"
                onClick={(e) => {
                    e.preventDefault();

                    const listOfInputIds = ['inputId', 'inputName', 'inputLastName', 'inputEmail', 'inputPhone'];
                    const inputs = listOfInputIds.map((id) => document.getElementById(id));

                    if(inputs.some((el) => !el.value)) return false;

                    const newPerson = {};
                    inputs.forEach((el) => {
                        newPerson[el.dataset.name] = el.value;
                        el.value = '';
                    });

                    props.onCreateNewPerson(newPerson);
                }}>
                Add
            </button>

        </form>
    )
}

export default AddForm