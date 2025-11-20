import type { City } from 'data/types';
import styles from './CityItem.module.css';
import { formatDate } from '@/utils/globalHelpers';
import { Link } from 'react-router-dom';

type CityItemProps = {
    city: City;
};

const CityItem = ({ city }: CityItemProps) => {
    const { id, cityName, date, emoji, position } = city!;
    const { lat, lng } = position;

    const formattedDate = formatDate(date);

    return (
        <li>
            <Link
                className={styles.cityItem}
                to={`${id}?lat=${lat}&lng=${lng}`}
            >
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time>{formattedDate}</time>
                <button className={styles.deleteBtn}>&times;</button>
            </Link>
        </li>
    );
};

export default CityItem;
