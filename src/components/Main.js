import React from 'react'

import DataTable from './DataTable'
import PersonInfo from './PersonInfo'
import ControlPanel from './ControlPanel'
import Pagination from './Pagination'

import { paginationFilter, filterByStr, sortByColumnName } from '../utils'
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


        this.addNewPerson = this.addNewPerson.bind(this);
        this.changeActiveColumn = this.changeActiveColumn.bind(this);
    }

    changeState(prop, value) {
        if(!value && prop !== 'searchStr') return;
        if(prop === 'data') {
            this.setState({
                data: value,
                searchStr: '',
                currentPage: 1,
            })
        } else {
            this.setState({
                [prop]: value,
            })
        }
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

    addNewPerson(person) {
        const data = this.state.data;
        data.push(person);
        this.setState({
            data,
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

        const resCurrentPage = this.state.currentPage <= numberOfPages
            ? this.state.currentPage
            : numberOfPages;
        const resData = paginationFilter(sortedData, resCurrentPage, ROWS_ON_TABLE);


        return (
            <main>

                <ControlPanel
                    onNewPerson={this.addNewPerson}
                    onDataLoaded={(value) => this.changeState('data', value)}
                    onSearch={(value) => this.changeState('searchStr', value)}
                />

                <hr />

                <Pagination 
                    numberOfPages={numberOfPages}
                    currentPage={resCurrentPage}
                    onPageChange={(value) => this.changeState('currentPage', value)}
                />

                <DataTable
                    dataList={resData}
                    onSelectPerson={(value) => this.changeState('selectedPerson', value)}
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