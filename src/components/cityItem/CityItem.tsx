import type { City } from 'data/types';
import styles from './CityItem.module.css';
import { formatDate } from '@/utils/globalHelpers';
import { Link } from 'react-router-dom';
import { useCustomContext } from '@/hooks/useCustomContext';
import { CitiesContext } from '@/contexts/CitiesContext';
import type { MouseEvent } from 'react';

type CityItemProps = {
    city: City;
};

const CityItem = ({ city }: CityItemProps) => {
    const { city: currCity, deleteCity } = useCustomContext(
        CitiesContext,
        'Cities ctx'
    );

    const { id, cityName, date, emoji, position } = city!;
    const { lat, lng } = position;

    const formattedDate = formatDate(date!);
    const isVisitedCityLink = id === currCity?.id;

    const handleDeleteCity = (e: MouseEvent) => {
        e.preventDefault();
        deleteCity(String(id));
    };

    return (
        <li>
            <Link
                to={`${id}?lat=${lat}&lng=${lng}`}
                className={`${styles.cityItem} ${
                    isVisitedCityLink && styles['cityItem--active']
                }`}
            >
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time>{formattedDate}</time>
                <button className={styles.deleteBtn} onClick={handleDeleteCity}>
                    &times;
                </button>
            </Link>
        </li>
    );
};

export default CityItem;
