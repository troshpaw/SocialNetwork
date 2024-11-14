// import React from 'react';
import MyPosts from './MyPosts';
import { addPostCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

// const MyPostsContainer = () => {

//     let state = props.store.getState();

//     let AddPost = () => {
//         props.store.dispatch(addPostCreator());
//     }

//     let updatePostText = (text) => {
//         props.store.dispatch(updateNewPostTextCreator(text));
//     }

//     return (
//         <MyPosts
//             addPost={AddPost}
//             updatePostText={updatePostText}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//         />
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;