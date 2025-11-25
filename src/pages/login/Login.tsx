import { useState } from 'react';
import styles from './Login.module.css';
import PageNav from '@/components/pageNav/PageNav';
import { useCustomContext } from '@/hooks/useCustomContext';
import { FakeAuthContext } from '@/contexts/FakeAuthContext';
import Button from '@/components/button/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('jack@example.com');
    const { login, isAuth } = useCustomContext(FakeAuthContext, 'FakeAuth ctx');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        login(email, password);

        if (isAuth) navigate('/app/cities', { replace: true });
    };

    return (
        <main onSubmit={handleLogin} className={styles.login}>
            <PageNav />
            <form className={styles.form}>
                <div className={styles.row}>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className={styles.row}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
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
