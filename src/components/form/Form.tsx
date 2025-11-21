import { useState, type ChangeEvent } from 'react';
import styles from './Form.module.css';
import Button from '../button/Button';
import { useNavigateBack } from '@/hooks/useNavigateBack';
import { useCustomContext } from '@/hooks/useCustomContext';
import { CitiesContext } from '@/contexts/CitiesContext';
import Spinner from '../spinner/Spinner';

const Form = () => {
    const handleNavigateBack = useNavigateBack();
    const { city, isLoading } = useCustomContext(CitiesContext, 'Cities ctx');

    const [values, setValues] = useState({
        cityName: '',
        emoji: '',
        notes: '',
        date: '',
    });

    const handleFormValues = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    if (isLoading) return <Spinner />;

    const { cityName, emoji, date, notes } = city ?? values;

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
                    value={date}
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
                <Button type="button" style="back" onClick={handleNavigateBack}>
                    Back
                </Button>
            </div>
        </form>
    );
};

export default Form;
