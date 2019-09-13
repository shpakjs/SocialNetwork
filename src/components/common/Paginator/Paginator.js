import React, { useState } from 'react';
import styles from './Paginator.module.css';

const Paginator = ({itemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {
    let pagesCount = Math.ceil(itemsCount/pageSize);
    let pages = [];
    for(let i=1; i < pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;
    return <div className={styles.pagination}>
            { portionNumber > 1 && 
            <button onClick={ () => setPortionNumber(portionNumber -1 ) }>
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.835 1.87002L10.065 0.100025L0.164961 10L10.065 19.9L11.835 18.13L3.70496 10L11.835 1.87002H11.835Z" fill="#26bfa6"/>
                </svg>
            </button> }
            {pages.filter( p => p >= leftPortionNumber && p<= rightPortionNumber)
                .map(p => {
                return <span key={p} onClick={() => {onPageChanged(p)}} className={`${styles.page} ${currentPage === p ? styles.selected : '' }`}> {p} </span>
            })}
            { portionNumber < portionCount  && 
            <button onClick={ () => { setPortionNumber(portionNumber + 1 )} }>
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.165039 18.13L1.93504 19.9L11.835 9.99998L1.93504 0.0999756L0.165039 1.86998L8.29504 9.99998L0.165039 18.13H0.165039Z" fill="#26bfa6"/>
                </svg>
            </button>}
    </div>
}

export default Paginator;