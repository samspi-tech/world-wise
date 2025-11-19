import { Outlet } from 'react-router-dom';
import Logo from '../logo/Logo';
import styles from './Sidebar.module.css';
import AppNav from '../appNav/AppNav';
import { useEffect } from 'react';
import { useCustomContext } from '@/hooks/useCustomContext';
import { CitiesContext } from '@/contexts/cities/CitiesContext';

const Sidebar = () => {
    const { getAllCities } = useCustomContext(CitiesContext, 'Cities ctx');

    const currYear = new Date().getFullYear();

    useEffect(() => {
        getAllCities();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
