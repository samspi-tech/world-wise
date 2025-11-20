import { useEffect, useState } from 'react';
import { BASE_URL } from '@/utils/constants';
import type { City } from 'data/types';

export const useFetchSingleCity = (cityId: string) => {
    const [city, setCity] = useState<City>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getSingleCity = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`${BASE_URL}/cities?id=${cityId}`);
                const data: City[] = await res.json();
                setCity(data[0]);
            } catch (err) {
                if (err instanceof Error) console.error(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        getSingleCity();
    }, [cityId]);

    return {
        city,
        isLoading,
    };
};
