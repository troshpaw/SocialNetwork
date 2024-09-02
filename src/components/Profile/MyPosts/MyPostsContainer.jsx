import React from 'react';
import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let AddPost = () => {
        props.store.dispatch(addPostCreator());
    }

    let updatePostText = (text) => {
        props.store.dispatch(updateNewPostTextCreator(text));
    }

    return (
        <MyPosts
            addPost={AddPost}
            updatePostText={updatePostText}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;