import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message='Hi, how are you?' likesCount='10' />
                <Post message="I'am fine!" likesCount='15' />
            </div>
        </div>
    )
}

export default MyPosts;
