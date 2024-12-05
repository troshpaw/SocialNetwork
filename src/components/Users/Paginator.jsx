import React from 'react';
import styles from './Users.module.css';

const Paginator = (props) => {
    return (
        <div>
            {props.pages.map(page => {
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