import type { City } from 'data/types';
import styles from './CityItem.module.css';
import { formatDate } from '@/utils/globalHelpers';

type CityItemProps = {
    city: City;
};

const CityItem = ({ city }: CityItemProps) => {
    const { cityName, date, emoji } = city;
    const formattedDate = formatDate(date);

    return (
        <li className={styles.cityItem}>
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.name}>{cityName}</h3>
            <time>{formattedDate}</time>
            <button className={styles.deleteBtn}>&times;</button>
        </li>
    );
};

export default CityItem;
