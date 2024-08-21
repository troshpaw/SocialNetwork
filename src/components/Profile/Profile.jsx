import MyPosts from './MyPosts/MyPosts';
// import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText} // add
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText} // add
            />
        </div>
    )
}

export default Profile;
