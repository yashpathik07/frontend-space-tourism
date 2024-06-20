import classes from '../styles/Display.module.css';

import Header from './Header';

import { Outlet } from 'react-router-dom';

const Display = () => {
    return (
        <div id={classes.display}>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};
export default Display;
