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
            columnSort: {
                columnName: 'id',
                isReverseDirection: false,
            }
        };

        this.selectPerson = this.selectPerson.bind(this);
        this.addNewPerson = this.addNewPerson.bind(this);
        this.setNewTableData = this.setNewTableData.bind(this);
        this.changeActiveColumn = this.changeActiveColumn.bind(this);
    }

    changeActiveColumn(columnName) {
        if(this.state.columnSort.columnName === columnName) {
            const direction = !this.state.columnSort.isReverseDirection;
            this.setState({
                columnSort: {
                    columnName,
                    isReverseDirection: direction,
                }
            })
        } else {
            this.setState({
                columnSort: {
                    columnName,
                    isReverseDirection: false,
                }
            })
        }
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
        const sortedData = sortByColumnName
            (
                this.state.data,
                this.state.columnSort.columnName,
                this.state.columnSort.isReverseDirection
            );

        return (
            <main>

                <ControlPanel
                    onNewPerson={this.addNewPerson}
                    onDataLoaded={this.setNewTableData}
                />

                <hr />

                <DataTable
                    dataList={sortedData}
                    onSelectPerson={this.selectPerson}
                    activeId={this.state.selectedPersonId}
                    activeColumn={this.state.columnSort}
                    onChangeActiveColumn={this.changeActiveColumn}
                />

                <hr />

                <PersonInfo personInfo={this.state.selectedPerson} />

            </main>
        )
    }
}

export default Main;