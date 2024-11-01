import MyPostsContainer from './MyPosts/MyPostsContainer';
// import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
