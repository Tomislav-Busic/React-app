import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoriteContext from '../../store/favorites-context';

const MainNavigation = () => {
    const favoritesCtx = useContext(FavoriteContext);
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
                        <Link to='/favorites'>Favorites
                        <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MainNavigation;