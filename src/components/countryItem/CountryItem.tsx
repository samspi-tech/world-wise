import styles from './CountryItem.module.css';
import type { Country } from '../countryList/CountryList';

type CountryItemProps = {
    country: Country;
};

const CountryItem = ({ country }: CountryItemProps) => {
    const { name, emoji } = country;

    return (
        <li className={styles.countryItem}>
            <span>{emoji}</span>
            <span>{name}</span>
        </li>
    );
};

export default CountryItem;
