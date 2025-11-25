import { Link } from 'react-router-dom';
import styles from './Homepage.module.css';
import PageNav from '@/components/pageNav/PageNav';
import { useCustomContext } from '@/hooks/useCustomContext';
import { FakeAuthContext } from '@/contexts/FakeAuthContext';

const Homepage = () => {
    const { isAuth } = useCustomContext(FakeAuthContext, 'FakeAuth ctx');

    return (
        <main className={styles.homepage}>
            <PageNav />
            <section>
                <h1>
                    You travel the world.
                    <br />
                    WorldWise keeps track of your adventures.
                </h1>
                <h2>
                    A world map that tracks your footsteps into every city you
                    can think of. Never forget your wonderful experiences, and
                    show your friends how you have wandered the world.
                </h2>
                {isAuth && (
                    <Link to="/app/cities" className="cta">
                        Start tracking now
                    </Link>
                )}
            </section>
        </main>
    );
};

export default Homepage;
