import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src='https://i.pinimg.com/736x/71/81/14/7181149979b9cc345415d3b6465b192b.jpg'></img>
            <div>
                {props.message}
            </div>
            <div>
                <span>likes</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;
