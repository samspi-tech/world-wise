import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import PageNav from '@/components/pageNav/PageNav';
import { useCustomContext } from '@/hooks/useCustomContext';
import { FakeAuthContext } from '@/contexts/FakeAuthContext';
import Button from '@/components/button/Button';

const Login = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('jack@example.com');
    const { login, isAuth } = useCustomContext(FakeAuthContext, 'FakeAuth ctx');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && password) login(email, password);
    };

    useEffect(() => {
        if (isAuth) navigate('/app/cities', { replace: true });
    }, [isAuth, navigate]);

    return (
        <main onSubmit={handleLogin} className={styles.login}>
            <PageNav />
            <form className={styles.form}>
                <div className={styles.row}>
                    <label htmlFor="email">Email address</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.row}>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <Button type="submit">Login</Button>
                </div>
            </form>
        </main>
    );
};

export default Login;
