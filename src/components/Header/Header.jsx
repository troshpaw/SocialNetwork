import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png'></img>
            <div className={style.authUser}>
                <NavLink to='/login'>{props.isAuth ? props.login : 'Login'}</NavLink>
            </div>
        </header>
    )
}

export default Header;