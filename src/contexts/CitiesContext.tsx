import { useState, createContext, type ReactNode, useEffect } from 'react';
import type { Cities, City } from 'data/types';
import { BASE_URL } from '@/utils/constants';

type CitiesContextValues = {
    city: City;
    cities: Cities;
    isLoading: boolean;
    getSingleCity: (id: string) => void;
    createCity: (payload: City) => void;
};

type CitiesProviderProps = {
    children: ReactNode;
};

const CitiesContext = createContext<CitiesContextValues | null>(null);

const CitiesProvider = ({ children }: CitiesProviderProps) => {
    const [city, setCity] = useState<City>();
    const [cities, setCities] = useState<Cities>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
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
        getAllCities();
    }, []);

    const getSingleCity = async (id: string) => {
        setIsLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/cities?id=${id}`);
            const data: City[] = await res.json();
            setCity(data[0]);
        } catch (err) {
            if (err instanceof Error) console.error(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const createCity = async (payload: City) => {
        setIsLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/cities`, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application-json',
                },
            });

            const newCity: City = await res.json();
            setCities((cities) => [...(cities as []), newCity]);
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
                getSingleCity,
                createCity,
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
};

export { CitiesContext, CitiesProvider };
