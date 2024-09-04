import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(post =>
        <Post message={post.message} likesCount={post.likesCount} key={post.id} />);

    let newPostElement = React.createRef();

    let onAddPostClick = () => {
        props.addPost();
    }

    let onNewPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePostText(text);
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onNewPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPostClick}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;