import React from 'react';
import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let onAddPost = () => {
        props.store.dispatch(addPostCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextCreator(text));
    }

    return (
        <MyPosts
            addPost={onAddPost}
            updatePost={onPostChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;