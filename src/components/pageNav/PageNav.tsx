import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';
import Logo from '../logo/Logo';
import { useCustomContext } from '@/hooks/useCustomContext';
import { FakeAuthContext } from '@/contexts/FakeAuthContext';

const PageNav = () => {
    const { user } = useCustomContext(FakeAuthContext, 'FakeAuth ctx');

    return (
        <nav className={styles.nav}>
            <Logo />
            <ul>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                </li>
                {!user && (
                    <li>
                        <NavLink to="/login" className={styles.ctaLink}>
                            Login
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default PageNav;
