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

            columnSort: {
                columnName: 'id',
                isReverseDirection: false,
            },

            searchStr: '',
        };

        this.selectPerson = this.selectPerson.bind(this);
        this.addNewPerson = this.addNewPerson.bind(this);
        this.setNewTableData = this.setNewTableData.bind(this);
        this.changeActiveColumn = this.changeActiveColumn.bind(this);
        this.changeSearchStr = this.changeSearchStr.bind(this);
    }

    changeSearchStr(searchStr) {
        this.setState({
            searchStr,
        })
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

    selectPerson(selectedPerson) {
        this.setState({
            selectedPerson,
        })
    }

    mainFilter(data) {
        let sortedData = sortByColumnName
            (
                filterByStr(data, this.state.searchStr),
                this.state.columnSort.columnName,
                this.state.columnSort.isReverseDirection
            );
        
        return sortedData
    }

    render() {
        const sortedData = this.mainFilter(this.state.data);

        return (
            <main>

                <ControlPanel
                    onNewPerson={this.addNewPerson}
                    onDataLoaded={this.setNewTableData}
                    onSearch={this.changeSearchStr}
                />

                <hr />

                <DataTable
                    dataList={sortedData}
                    onSelectPerson={this.selectPerson}
                    activePerson={this.state.selectedPerson}
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