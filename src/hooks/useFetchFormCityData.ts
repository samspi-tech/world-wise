import { useEffect, useState } from 'react';
import { convertCountryCodeToEmoji } from '@/components/form/helpers';
import { BIG_DATA_CLOUD_URL } from '@/utils/constants';

export const useFetchFormCityData = (lat: string, lng: string) => {
    const [error, setError] = useState('');
    const [isFormDataLoading, setIsFormDataLoading] = useState(false);
    const [formCityData, setFormCityData] = useState({
        cityName: '',
        country: '',
        emoji: '',
        notes: '',
        date: new Date(),
    });

    useEffect(() => {
        const fetchFormCityData = async () => {
            setIsFormDataLoading(true);
            try {
                const res = await fetch(
                    `${BIG_DATA_CLOUD_URL}?latitude=${lat}&longitude=${lng}`
                );
                const data = await res.json();
                setFormCityData({
                    cityName: data.city || data.locality || '',
                    country: data.country,
                    emoji: convertCountryCodeToEmoji(data.countryCode),
                    notes: '',
                    date: new Date(),
                });
            } catch (err) {
                if (err instanceof Error) setError(err.message);
            } finally {
                setIsFormDataLoading(false);
            }
        };
        fetchFormCityData();
    }, [lat, lng]);

    return {
        error,
        isFormDataLoading,
        formCityData,
        setFormCityData,
    };
};
