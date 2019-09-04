import React from 'react';
import styles from './Paginator.module.css';

const Paginator = ({itemsCount, pageSize, onPageChanged,currentPage}) => {
    let pagesCount = Math.ceil(itemsCount/pageSize);
    let pages = [];
    for(let i=1; i < pagesCount; i++) {
        pages.push(i);
    }
    return <div className={styles.pagination}>
        {
            pages.map(p => {
                return <span key={p} onClick={() => {onPageChanged(p)}} className={currentPage === p ? styles.selected : '' }> {p} </span>
            })
        }
    </div>
}

export default Paginator;