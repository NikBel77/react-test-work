import React from 'react'
import leftArrow from '../icons/left-arr.svg'
import rightArrow from '../icons/right-arr.svg'
import { countPaginationNumbers } from '../utils'

function Pagination(props) {
    const pagination = countPaginationNumbers(props.currentPage, props.numberOfPages);
    const leftArrowClass = pagination[0] === props.currentPage ? 'page-item disabled' : 'page-item';
    const rightArrowClass = pagination[pagination.length - 1] === props.currentPage ? 'page-item disabled ' : 'page-item';

    return (
        <div>
            <div className='pagination-wrapper'>
                <ul className='pagination'>
                    <li className={leftArrowClass}>
                        <img className='page-link' src={leftArrow} alt='arrow'/>
                    </li>

                    {pagination.map((el, i) => {
                        if (el === props.currentPage) {
                            return (
                                <li key={i} className='page-item active'>
                                    <span className='page-link'>{el}</span>
                                </li>
                            )
                        } else {
                            return (
                                <li key={i}
                                    className='page-item'
                                    onClick={() => props.onPageChange(el)}>
                                    <span className='page-link'>{el}</span>
                                </li>
                            )
                        }
                    })}

                    <li className={rightArrowClass}>
                        <img className='page-link' src={rightArrow} alt='arrow'/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Pagination