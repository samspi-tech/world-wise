import type { Cities, City } from 'data/types';
import { createContext } from 'react';

type CitiesContextValues = {
    city: City;
    cities: Cities;
    isLoading: boolean;
    getAllCities: () => void;
    getSingleCity: (cityId: string) => void;
};

export const CitiesContext = createContext<CitiesContextValues | null>(null);
