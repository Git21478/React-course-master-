import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {
    return (
        
            <header className={s.header}>
                <img src='https://cdn-icons-png.flaticon.com/512/1362/1362894.png'/>
                <div className={s.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>
            
    )
}

export default Header;