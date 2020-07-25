import React from 'react'
import TableRow from './TableRow'

import caretRight from '../icons/caret-r.svg'

class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleIdChange = this.handleIdChange.bind(this)
    }

    handleIdChange(id) {
        this.props.onSelectPerson(id)
    }

    render() {
        return (
            <div className='container'>
                <table className="table table-hover table-sm table-dark">
                    <thead>
                        <tr>
                            <th scope="col">
                                id<img className='table-caret' src={caretRight} alt='caret'/>
                            </th>
                            <th scope="col">
                                First name<img className='table-caret' src={caretRight} alt='caret'/>
                            </th>
                            <th scope="col">
                                Last name<img className='table-caret' src={caretRight} alt='caret'/>
                            </th>
                            <th scope="col">
                                Email<img className='table-caret' src={caretRight} alt='caret'/>
                            </th>
                            <th scope="col">
                                Phone<img className='table-caret' src={caretRight} alt='caret'/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.dataList.map((personData, i) => {
                            const isSelected = this.props.activeId === personData.id;

                            return (
                                <TableRow
                                    onIdChange={this.handleIdChange}
                                    personData={personData}
                                    isSelected={isSelected}
                                    key={i} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DataTable