import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './City.module.css';
import Spinner from '../spinner/Spinner';
import { formatDate } from '@/utils/globalHelpers';
import Message from '../message/Message';
import Button from '../button/Button';
import { useNavigateBack } from '@/hooks/useNavigateBack';
import { useCustomContext } from '@/hooks/useCustomContext';
import { CitiesContext } from '@/contexts/CitiesContext';

const City = () => {
    const { cityId } = useParams();
    const handleNavigateBack = useNavigateBack();
    const { city, isLoading, getSingleCity } = useCustomContext(
        CitiesContext,
        'Cities ctx'
    );

    useEffect(() => {
        getSingleCity(cityId!);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cityId]);

    if (isLoading) return <Spinner />;

    if (!city) {
        return <Message message="Something went wrong. Try again later." />;
    }

    const { emoji, cityName, date, notes } = city;
    const formattedDate = date ? formatDate(date) : null;

    return (
        <div className={styles.city}>
            <div className={styles.row}>
                <h6>City name</h6>
                <h3>
                    <span>{emoji}</span> {cityName}
                </h3>
            </div>
            <div className={styles.row}>
                <h6>You went to {cityName} on</h6>
                <time>{formattedDate}</time>
            </div>
            {notes && (
                <div className={styles.row}>
                    <h6>Your notes</h6>
                    <p>{notes}</p>
                </div>
            )}
            <div className={styles.row}>
                <h6>Learn more</h6>
                <a
                    href={`https://en.wikipedia.org/wiki/${cityName}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    Check out {cityName} on Wikipedia &rarr;
                </a>
            </div>
            <div>
                <Button variant="back" onClick={handleNavigateBack}>
                    Back
                </Button>
            </div>
        </div>
    );
};

export default City;
