import { useState, type ReactNode } from 'react';
import type { Cities, City } from 'data/types';
import { CitiesContext } from './CitiesContext';
import { BASE_URL } from '@/utils/constants';

type CitiesProviderProps = {
    children: ReactNode;
};

export const CitiesProvider = ({ children }: CitiesProviderProps) => {
    const [city, setCity] = useState<City>();
    const [cities, setCities] = useState<Cities>();
    const [isLoading, setIsLoading] = useState(false);

    const getAllCities = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/cities`);
            const data: Cities = await res.json();
            setCities(data);
        } catch (err) {
            if (err instanceof Error) console.error(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const getSingleCity = async (cityId: string) => {
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

    return (
        <CitiesContext.Provider
            value={{
                city,
                cities,
                isLoading,
                getAllCities,
                getSingleCity,
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
};
