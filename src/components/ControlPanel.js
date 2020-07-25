import React from 'react'
import AddForm from './addForm'

import plus from '../icons/plus.svg'
import close from '../icons/close.svg'

import { LONG_LIST_URL, SHORT_LIST_URL } from '../constants'

class ControlPanel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isAddFormHide: true,
        }

        this.demoBtnShort = React.createRef();
        this.demoBtnLong = React.createRef();

        this.handleNewPersonDate = this.handleNewPersonDate.bind(this);
    }

    disabledDemoButtons() {
        this.demoBtnShort.current.classList.add('disabled');
        this.demoBtnLong.current.classList.add('disabled');

        this.demoBtnShort.current.setAttribute('disabled', 'disabled');
        this.demoBtnLong.current.setAttribute('disabled', 'disabled');
    }

    activateDemoButtons() {
        this.demoBtnShort.current.classList.remove('disabled');
        this.demoBtnLong.current.classList.remove('disabled');

        this.demoBtnShort.current.removeAttribute('disabled', 'disabled');
        this.demoBtnLong.current.removeAttribute('disabled', 'disabled');
    }

    toggleAddForm() {
        if (this.state.isAddFormHide) {
            this.setState({ isAddFormHide: false });
        } else {
            this.setState({ isAddFormHide: true });
        }
    }

    async loadDemoData(e, url) {
        this.disabledDemoButtons();

        const text = e.target.innerText;
        e.target.innerText = 'Loading';

        const data = await fetch(url).then((res) => res.json());
        this.props.onDataLoaded(data);

        e.target.innerText = text;
        this.activateDemoButtons()
    }

    handleNewPersonDate(personData) {
        if (typeof personData !== 'object') throw new Error('Person data type must be object');
        this.props.onNewPerson(personData);
    }

    render() {
        const displayForm = this.state.isAddFormHide ? 'none' : 'block';

        return (
            <div className='container'>
                <div className='control-panel'>

                    <div className='control-panel__left'>
                        <div className='demo-loader'>
                            <button
                                ref={this.demoBtnShort}
                                className='btn btn-success'
                                onClick={(e) => this.loadDemoData(e.nativeEvent, SHORT_LIST_URL)}>
                                short demo list
                            </button>
                            <button
                                ref={this.demoBtnLong}
                                className='btn btn-danger'
                                onClick={(e) => this.loadDemoData(e.nativeEvent, LONG_LIST_URL)}>
                                long demo list
                            </button>
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

                            <div style={{ display: displayForm }}>
                                <AddForm onCreateNewPerson={this.handleNewPersonDate} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ControlPanel