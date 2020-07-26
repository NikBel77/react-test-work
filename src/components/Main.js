import React from 'react'
import DataTable from './DataTable'
import PersonInfo from './PersonInfo'
import ControlPanel from './ControlPanel'
import { paginationFilter, filterByStr, sortByColumnName } from '../utils'
import Pagination from './Pagination'
import { ROWS_ON_TABLE } from '../constants'

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
            currentPage: 1,
        };

        this.selectPerson = this.selectPerson.bind(this);
        this.addNewPerson = this.addNewPerson.bind(this);
        this.setNewTableData = this.setNewTableData.bind(this);
        this.changeActiveColumn = this.changeActiveColumn.bind(this);
        this.changeSearchStr = this.changeSearchStr.bind(this);
        this.changeCurrentPage = this.changeCurrentPage.bind(this);
    }

    changeSearchStr(searchStr) {
        this.setState({ searchStr })
    }

    changeActiveColumn(columnName) {
        if (this.state.columnSort.columnName === columnName) {
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

    changeCurrentPage(currentPage) {
        this.setState({ currentPage });
    }

    setNewTableData(data) {
        if(!data) return
        this.setState({ data });
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
        if(!data) throw new Error('empty Data')
        if(!data.length) return data

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

        const numberOfPages = Math.floor(sortedData.length / ROWS_ON_TABLE) 
            + ((sortedData.length % ROWS_ON_TABLE) > 0 ? 1 : 0);

        const resData = paginationFilter(sortedData, this.state.currentPage, ROWS_ON_TABLE);

        return (
            <main>

                <ControlPanel
                    onNewPerson={this.addNewPerson}
                    onDataLoaded={this.setNewTableData}
                    onSearch={this.changeSearchStr}
                />

                <hr />

                <Pagination 
                    numberOfPages={numberOfPages}
                    currentPage={this.state.currentPage}
                    onPageChange={this.changeCurrentPage}
                />

                <DataTable
                    dataList={resData}
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