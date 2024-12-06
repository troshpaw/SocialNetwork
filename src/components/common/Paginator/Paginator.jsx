import React from 'react';
import styles from './Paginator.module.css';

const Paginator = (props) => {

    let pages = [];
    let totalPagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    if (props.currentPage <= 5) {
        for (let i = 1; i < 10; i++) {
            pages.push(i);
        }
    }
    else if ((props.currentPage > 5) && (props.currentPage <= totalPagesCount - 4)) {
        for (let i = props.currentPage - 4; i < props.currentPage + 5; i++) {
            pages.push(i);
        }
    }
    else if (props.currentPage > totalPagesCount - 5) {
        for (let i = totalPagesCount - 8; i <= totalPagesCount; i++) {
            pages.push(i);
        }
    }

    return (
        <div>
            {pages.map(page => {
                return <span
                    className={page === props.currentPage ? styles.currentPage : undefined}
                    onClick={(event) => {
                        props.onPageChanged(page)
                    }}>
                    &nbsp;{page}&nbsp;
                </span>
            })}
        </div >
    )
}

export default Paginator;