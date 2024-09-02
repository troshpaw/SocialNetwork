// import React from 'react';
import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';
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
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },

        updatePostText: (text) => {
            dispatch(updateNewPostTextCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;