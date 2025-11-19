import type { Cities } from 'data/types';
import { createContext } from 'react';

type CitiesContextValues = {
    cities: Cities;
    isLoading: boolean;
    getAllCities: () => void;
};

export const CitiesContext = createContext<CitiesContextValues | null>(null);
