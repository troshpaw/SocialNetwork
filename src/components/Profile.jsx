import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src='https://res.cloudinary.com/whydonate/image/upload/v1/whydonate-production/user/fundraiser-background/d4cc3696-7a77-11e9-81ee-419f95339d87_rsez7s'></img>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={style.posts}>
                    <div className={style.item}>
                        Post 1
                    </div>
                    <div className={style.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
