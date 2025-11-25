import { Outlet } from 'react-router-dom';
import Logo from '../logo/Logo';
import styles from './Sidebar.module.css';
import AppNav from '../appNav/AppNav';
import Footer from './partials/Footer';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Sidebar;
