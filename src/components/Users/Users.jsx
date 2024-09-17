import React from 'react';
import axios from 'axios';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/user.png';

class Users extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
            .catch(error => {
                console.log(error);
            });
    }

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {

        let pages = [];
        let totalPagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        
        // debugger
        
        if (this.props.currentPage <= 5) {
            for (let i = 1; i < 10; i++) {
                pages.push(i);
            }
        }
        else if ((this.props.currentPage > 5) && (this.props.currentPage <= totalPagesCount - 4)) {
            for (let i = this.props.currentPage - 4; i < this.props.currentPage + 5; i++) {
                pages.push(i);
            }
        }
        else if (this.props.currentPage > totalPagesCount - 5) {
            for (let i = totalPagesCount - 8; i <= totalPagesCount; i++) {
                pages.push(i);
            }
        }
        
        // debugger
        
        return (
            <div>
                <div>
                    {pages.map(page => {
                        return <span className={page === this.props.currentPage ? styles.currentPage : undefined}>
                            <span onClick={(event) => { this.onPageChanged(page) }}> {page} </span>
                        </span>
                    })}
                </div>
                <div>
                    {this.props.users.map(user =>
                        <div key={user.id} className={styles.userContainer}>
                            <div className={styles.userInfo}>
                                <div>
                                    <img src={user.photos.small != null
                                        ? user.photos.small
                                        : userPhoto
                                    } />
                                </div>
                                <div>
                                    {user.followed
                                        ? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                                        : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>
                                    }
                                </div>
                            </div>
                            <div className={styles.userDetails}>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                                <div>
                                    <div>"user.location.country"</div>
                                    <div>"user.location.city"</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Users;