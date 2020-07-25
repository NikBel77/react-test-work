import React from 'react'
import AddForm from './addForm'
import plus from '../icons/plus.svg'
import close from '../icons/close.svg'

class ControlPanel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isAddFormHide: true,
        }

        this.handleNewPersonDate = this.handleNewPersonDate.bind(this)
    }

    toggleAddForm() {
        if(this.state.isAddFormHide) {
            this.setState({isAddFormHide: false})
        } else {
            this.setState({isAddFormHide: true})
        }
    }

    handleNewPersonDate(personData) {
        if(typeof personData !== 'object') throw new Error('Person data type must be object');
        this.props.onNewPerson(personData);
    }

    render() {
        const displayForm = this.state.isAddFormHide ? 'none' : 'block';

        return (
            <div className='container'>
                <div className='control-panel'>

                    <div className='control-panel__left'>
                        <div className='demo-loader'>
                            <button className='btn btn-success'>short demo list</button>
                            <button className='btn btn-danger'>long demo list</button>
                        </div>

                        <div className='search-panel'>
                            <input type='text'></input>
                            <button className='btn btn-primary'>Search</button>
                        </div>
                    </div>

                    <div className='control-panel__right'>
                        <div>
                            <button 
                                className='btn btn-light'
                                onClick={() => this.toggleAddForm()}>

                                {this.state.isAddFormHide
                                    ? <img src={plus} alt='plus' />
                                    : <img src={close} alt='close' />
                                }

                            </button>

                            <div style={{display: displayForm}}>
                                <AddForm onCreateNewPerson={this.handleNewPersonDate}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ControlPanel