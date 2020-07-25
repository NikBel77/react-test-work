import React from 'react'
import DataTable from './DataTable'
import PersonInfo from './PersonInfo'
import ControlPanel from './ControlPanel'
import { paginationFilter, filterByStr, sortByColumnName, findPersonById } from '../utils'

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            selectedPerson: false,
            selectedPersonId: false,
        };

        this.selectPerson = this.selectPerson.bind(this);
        this.addNewPerson = this.addNewPerson.bind(this);
        this.setNewTableData = this.setNewTableData.bind(this);
    }

    setNewTableData(data) {
        this.setState({ data: data });
    }

    addNewPerson(person) {
        const data = this.state.data;
        data.push(person);
        this.setState({
            data,
        })
    }

    selectPerson(id) {
        this.setState({
            selectedPerson: findPersonById(this.state.data, id),
            selectedPersonId: id,
        })
    }

    render() {
        return (
            <main>

                <ControlPanel
                    onNewPerson={this.addNewPerson}
                    onDataLoaded={this.setNewTableData}
                />

                <hr />

                <DataTable
                    dataList={this.state.data}
                    onSelectPerson={this.selectPerson}
                    activeId={this.state.selectedPersonId}
                />

                <hr />

                <PersonInfo personInfo={this.state.selectedPerson} />

            </main>
        )
    }
}

export default Main;