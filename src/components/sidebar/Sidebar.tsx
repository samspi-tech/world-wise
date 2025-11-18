import { Outlet } from 'react-router-dom';
import Logo from '../logo/Logo';
import styles from './sidebar.module.css';
import AppNav from '../appNav/AppNav';

const Sidebar = () => {
    const currYear = new Date().getFullYear();

    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />
            <Outlet />
            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copyright {currYear} by WorldWise Inc.
                </p>
            </footer>
        </div>
    );
};

export default Sidebar;
