import { useNavigate } from 'react-router-dom';
import { useCustomContext } from '@/hooks/useCustomContext';
import styles from './User.module.css';
import { FakeAuthContext } from '@/contexts/FakeAuthContext';
import Button from '../button/Button';

const User = () => {
    const navigate = useNavigate();
    const { user, logout } = useCustomContext(FakeAuthContext, 'FakeAuth ctx');

    if (!user) return null;

    const { name, avatar } = user;

    const handleLogout = () => {
        logout();
        navigate('/', { replace: true });
    };

    return (
        <div className={styles.user}>
            <img src={avatar} alt={name} />
            <span>Welcome, {name}</span>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
};

export default User;
