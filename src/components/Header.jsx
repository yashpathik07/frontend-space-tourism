import classes from '../styles/Header.module.css';

import { useState } from 'react';

import headerLogo from '../assets/logo.svg';
import hamOpen from '../assets/icon-hamburger.svg';
import hamClose from '../assets/icon-close.svg';

import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className={classes.headerLogo}>
                <img src={headerLogo} alt="Header Logo" />
            </div>
            <div className={classes.hr}>
                <hr />
            </div>

            <button onClick={toggleMenuHandler}>
                <img src={isMenuOpen ? hamClose : hamOpen} alt="Menu Button" />
            </button>
            <nav className={isMenuOpen ? classes.open : ''}>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : '')} end>
                            <span>00</span>home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/destination" className={({ isActive }) => (isActive ? classes.active : '')}>
                            <span>01</span>destination
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/crew" className={({ isActive }) => (isActive ? classes.active : '')}>
                            <span>02</span>crew
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/technology" className={({ isActive }) => (isActive ? classes.active : '')}>
                            <span>03</span>technology
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
