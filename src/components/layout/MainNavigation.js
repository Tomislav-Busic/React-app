import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <div className={classes.header}>
            <h1 className={classes.logo}>Meetups</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All meetups</Link>
                    </li>
                    <li>
                        <Link to='new-meetup'>New meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MainNavigation;