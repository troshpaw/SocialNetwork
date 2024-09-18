import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={styles.imageContent}>
                <img src='https://res.cloudinary.com/whydonate/image/upload/v1/whydonate-production/user/fundraiser-background/d4cc3696-7a77-11e9-81ee-419f95339d87_rsez7s'></img>
            </div>
            <div className={styles.descriptionBlock}>
                <div><img src={props.profile.photos.small} /></div>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    );

}

export default ProfileInfo;
