import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://res.cloudinary.com/whydonate/image/upload/v1/whydonate-production/user/fundraiser-background/d4cc3696-7a77-11e9-81ee-419f95339d87_rsez7s'></img>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;
