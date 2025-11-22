import { useCustomContext } from '@/hooks/useCustomContext';
import styles from './CountryList.module.css';
import Spinner from '../spinner/Spinner';
import Message from '../message/Message';
import CountryItem from '../countryItem/CountryItem';
import { getCountriesWithoutDuplicates } from './helpers';
import { CitiesContext } from '@/contexts/CitiesContext';

const CountryList = () => {
    const { cities, isLoading } = useCustomContext(CitiesContext, 'Cities ctx');

    if (isLoading) return <Spinner />;

    if (!cities) {
        return (
            <Message message="Add your first country by clicking on a country on the map." />
        );
    }

    const countries = getCountriesWithoutDuplicates(cities);

    return (
        <ul className={styles.countryList}>
            {countries?.map((country) => (
                <CountryItem key={country.id} country={country} />
            ))}
        </ul>
    );
};

export default CountryList;
