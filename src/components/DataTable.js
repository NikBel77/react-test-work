import React from 'react'
import TableRow from './TableRow'

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
                            <th scope="col">id</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
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