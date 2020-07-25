import React from 'react'
import TableRow from './TableRow'

import caretRight from '../icons/caret-r.svg'
import caretUp from '../icons/caret-up.svg'
import caretDown from '../icons/caret-d.svg'

const tableHeaderMap = new Map([
    ['id', 'ID'],
    ['firstName', 'First name'],
    ['lastName', 'Last name'],
    ['email', 'Email'],
    ['phone', 'Phone'],
])

class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleIdChange = this.handleIdChange.bind(this);
    }

    handleIdChange(personData) {
        this.props.onSelectPerson(personData);
    }

    render() {
        return (
            <div className='container'>
                <table className="table table-hover table-sm table-dark">
                    <thead>
                        <tr>
                            {Array.from(tableHeaderMap.keys()).map((name, i) => {
                                const isActive = this.props.activeColumn.columnName === name;
                                let src = caretRight;

                                if(isActive) {
                                    src = this.props.activeColumn.isReverseDirection
                                        ? caretUp
                                        : caretDown
                                }

                                return (
                                    <th scope="col"
                                        key={i}
                                        onClick={() => this.props.onChangeActiveColumn(name)}>
                                        { tableHeaderMap.get(name) }
                                        <img className='table-caret' src={src} alt='caret' />
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.dataList.map((personData, i) => {
                            const isSelected = this.props.activePerson === personData;

                            return (
                                <TableRow
                                    onIdChange={this.handleIdChange}
                                    personData={personData}
                                    isSelected={isSelected}
                                    key={i}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DataTable