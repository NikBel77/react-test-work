import React from 'react'
import leftArrow from '../icons/left-arr.svg'
import rightArrow from '../icons/right-arr.svg'
import { ROWS_ON_TABLE } from '../constants'

function Pagination(props) {

    const pagination = new Array(props.numberOfPages).fill(0)
        .map((_, i) => {
            if (i + 1 === props.currentPage) {
                return (
                    <li key={i} className='page-item active'>
                        <span className='page-link'>{i + 1}</span>
                    </li>
                )
            } else {
                return (
                    <li key={i}
                        className='page-item'
                        onClick={() => props.onPageChange(i + 1)}>
                        <span className='page-link'>{i + 1}</span>
                    </li>
                )
            }
        });

    return (
        <div>
            <div className='pagination-wrapper'>
                <ul className='pagination'>
                    <li className='page-item'><img className='page-link' src={leftArrow} /></li>
                    {pagination}
                    <li className='page-item'><img className='page-link' src={rightArrow} /></li>
                </ul>
            </div>
        </div>
    )
}

export default Pagination