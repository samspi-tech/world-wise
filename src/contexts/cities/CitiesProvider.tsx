import { useState, type ReactNode } from 'react';
import type { Cities } from 'data/types';
import { CitiesContext } from './CitiesContext';

type CitiesProviderProps = {
    children: ReactNode;
};

export const CitiesProvider = ({ children }: CitiesProviderProps) => {
    const [cities, setCities] = useState<Cities>();
    const [isLoading, setIsLoading] = useState(false);

    const getAllCities = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('http://localhost:3000/cities');
            const data: Cities = await res.json();
            setCities(data);
        } catch (err) {
            if (err instanceof Error) console.error(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <CitiesContext.Provider
            value={{
                cities,
                isLoading,
                getAllCities,
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
};
