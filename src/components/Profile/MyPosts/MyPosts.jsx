import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your post"} name={"newPostText"} component={"input"} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm' })(AddPostForm);

const MyPosts = (props) => {

    let postsElements = props.posts.map(post =>
        <Post message={post.message} likesCount={post.likesCount} key={post.id} />);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>

            <AddPostFormRedux onSubmit={addNewPost} />

            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;