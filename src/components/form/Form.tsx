import { type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';
import Button from '../button/Button';
import { useCustomContext } from '@/hooks/useCustomContext';
import { CitiesContext } from '@/contexts/CitiesContext';
import Spinner from '../spinner/Spinner';
import { useURLPosition } from '@/hooks/useURLPosition';
import { useFetchFormCityData } from '@/hooks/useFetchFormCityData';

const Form = () => {
    const navigate = useNavigate();
    const { city, isLoading } = useCustomContext(CitiesContext, 'Cities ctx');

    const { lat, lng } = useURLPosition();
    const { isFormDataLoading, formCityData, setFormCityData } =
        useFetchFormCityData(String(lat), String(lng));

    const handleFormValues = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormCityData({
            ...formCityData,
            [name]: value,
        });
    };

    if (isLoading) return <Spinner />;
    if (isFormDataLoading) return <Spinner />;

    const { cityName, emoji, date, notes } = city ?? formCityData;

    return (
        <form className={styles.form}>
            <div className={styles.row}>
                <label htmlFor="cityName">City name</label>
                <input
                    id="cityName"
                    name="cityName"
                    value={cityName}
                    onChange={handleFormValues}
                />
                <span className={styles.flag}>{emoji}</span>
            </div>
            <div className={styles.row}>
                <label htmlFor="date">When did you go to {cityName}?</label>
                <input
                    id="date"
                    name="date"
                    value={String(date)}
                    onChange={handleFormValues}
                />
            </div>
            <div className={styles.row}>
                <label htmlFor="notes">
                    Notes about your trip to {cityName}
                </label>
                <textarea
                    id="notes"
                    name="notes"
                    value={notes!}
                    onChange={handleFormValues}
                />
            </div>
            <div className={styles.buttons}>
                <Button type="submit">Add</Button>
                <Button
                    type="button"
                    variant="back"
                    onClick={() => navigate('/app/cities')}
                >
                    Back
                </Button>
            </div>
        </form>
    );
};

export default Form;
