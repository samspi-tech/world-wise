import { useCustomContext } from '@/hooks/useCustomContext';
import styles from './CityList.module.css';
import { CitiesContext } from '@/contexts/cities/CitiesContext';
import Spinner from '../spinner/Spinner';
import CityItem from '../cityItem/CityItem';
import Message from '../message/Message';

const CityList = () => {
    const { cities, isLoading } = useCustomContext(CitiesContext, 'Cities ctx');

    if (isLoading) return <Spinner />;

    if (!cities) {
        return (
            <Message message="Add your first city by clicking on a city on the map." />
        );
    }

    return (
        <ul className={styles.cityList}>
            {cities?.map((city) => (
                <CityItem key={city.id} city={city} />
            ))}
        </ul>
    );
};

export default CityList;
