import { useState, createContext, type ReactNode, useEffect } from 'react';
import type { Cities } from 'data/types';
import { BASE_URL } from '@/utils/constants';

type CitiesContextValues = {
    cities: Cities;
    isLoading: boolean;
};

type CitiesProviderProps = {
    children: ReactNode;
};

const CitiesContext = createContext<CitiesContextValues | null>(null);

const CitiesProvider = ({ children }: CitiesProviderProps) => {
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

    return (
        <CitiesContext.Provider
            value={{
                cities,
                isLoading,
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
};

export { CitiesContext, CitiesProvider };
