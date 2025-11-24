import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';
import Button from '../button/Button';
import Spinner from '../spinner/Spinner';
import { useURLPosition } from '@/hooks/useURLPosition';
import { useCityForm } from '@/hooks/useCityForm';
import Message from '../message/Message';
import type { FormEvent } from 'react';
import { useCustomContext } from '@/hooks/useCustomContext';
import { CitiesContext } from '@/contexts/CitiesContext';

const Form = () => {
    const navigate = useNavigate();
    const { createCity, isLoading } = useCustomContext(
        CitiesContext,
        'Cities ctx'
    );

    const { lat, lng } = useURLPosition();
    const { isFormDataLoading, formCityData, handleFormValues, setDate } =
        useCityForm(String(lat), String(lng));

    if (isFormDataLoading || isLoading) return <Spinner />;

    if (!lat && !lng) {
        return <Message message="Start by clicking somewhere on the map" />;
    }

    const { cityName, emoji, date, notes } = formCityData;

    const handleNavigateBack = () => navigate('/app/cities');

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        const { cityName, date } = formCityData;
        if (!cityName || !date) return;

        const payload = {
            ...formCityData,
            position: { lat, lng },
        };

        createCity(payload);
        handleNavigateBack();
    };

    return (
        <form
            onSubmit={onSubmit}
            className={`${styles.form} ${isLoading && styles.loading}`}
        >
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
                <DatePicker
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => setDate(date)}
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
                    onClick={handleNavigateBack}
                >
                    Back
                </Button>
            </div>
        </form>
    );
};

export default Form;
