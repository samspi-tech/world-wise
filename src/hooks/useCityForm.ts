import { useEffect, useState, type ChangeEvent } from 'react';
import { convertCountryCodeToEmoji } from '@/components/form/helpers';
import { BIG_DATA_CLOUD_URL } from '@/utils/constants';

export const useCityForm = (lat: string, lng: string) => {
    const [date, setDate] = useState<Date | null>(new Date());
    const [isFormDataLoading, setIsFormDataLoading] = useState(false);
    const [formCityData, setFormCityData] = useState({
        cityName: '',
        country: '',
        emoji: '',
        notes: '',
        date,
    });

    const handleFormValues = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormCityData({
            ...formCityData,
            [name]: value,
        });
    };

    useEffect(() => {
        const fetchFormCityData = async () => {
            if (!lat && !lng) return;

            setIsFormDataLoading(true);
            try {
                const res = await fetch(
                    `${BIG_DATA_CLOUD_URL}?latitude=${lat}&longitude=${lng}`
                );
                const data = await res.json();
                setFormCityData({
                    cityName: data.city || data.locality || '',
                    country: data.countryName,
                    emoji: convertCountryCodeToEmoji(data.countryCode),
                    notes: '',
                    date,
                });
            } catch (err) {
                if (err instanceof Error) console.error(err.message);
            } finally {
                setIsFormDataLoading(false);
            }
        };
        fetchFormCityData();
    }, [lat, lng, date]);

    return {
        isFormDataLoading,
        formCityData,
        handleFormValues,
        setDate,
    };
};
