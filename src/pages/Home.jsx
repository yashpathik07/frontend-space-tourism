import classes from '../styles/Home.module.css';

import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div id={classes.home}>
            <div className={classes.homeAbout}>
                <h3>so, you want to travel to</h3>
                <h1>space</h1>
                <p>
                    Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and
                    not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly
                    out of this world experience!
                </p>
            </div>
            <div className={classes.explore}>
                <Link to="/destination">explore</Link>
            </div>
        </div>
    );
};
export default HomePage;
