import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

const Map = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');

    const handleNavigateToForm = () => navigate('form');

    return (
        <div
            onClick={handleNavigateToForm}
            className={styles.mapContainer}
            aria-label="Click me to navigate to the form"
        >
            <h1>Position: </h1>
            <p>{lat}</p>
            <p>{lng}</p>
        </div>
    );
};

export default Map;
