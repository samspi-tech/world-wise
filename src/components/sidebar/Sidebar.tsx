import Logo from '../logo/Logo';
import styles from './sidebar.module.css';

const Sidebar = () => {
    const currYear = new Date().getFullYear();

    return (
        <div className={styles.sidebar}>
            <Logo />
            <p>app nav</p>
            <p>list of cities</p>
            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copyright {currYear} by WorldWise Inc.
                </p>
            </footer>
        </div>
    );
};

export default Sidebar;
