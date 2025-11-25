import styles from '../Sidebar.module.css';

const Footer = () => {
    const currYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy; Copyright {currYear} by WorldWise Inc.
            </p>
        </footer>
    );
};

export default Footer;
