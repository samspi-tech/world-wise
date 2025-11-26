import { createContext, useCallback, useEffect, useReducer } from 'react';
import type { Cities, City } from 'data/types';
import { BASE_URL } from '@/utils/constants';
import {
    citiesReducer,
    initialCitiesState,
    type CitiesState,
} from '@/reducers/citiesReducer';

interface CitiesContextValues extends CitiesState {
    getSingleCity: (id: string) => void;
    createCity: (payload: City) => void;
    deleteCity: (id: string) => void;
}

const CitiesContext = createContext<CitiesContextValues | null>(null);

const CitiesProvider = ({ children }: React.PropsWithChildren) => {
    const [state, dispatch] = useReducer(citiesReducer, initialCitiesState);
    const { city, cities, isLoading } = state;

    useEffect(() => {
        const getAllCities = async () => {
            dispatch({ type: 'loading' });
            try {
                const res = await fetch(`${BASE_URL}/cities`);
                const data: Cities = await res.json();

                dispatch({
                    type: 'cities/loaded',
                    payload: data,
                });
            } catch (err) {
                if (err instanceof Error) console.error(err.message);
            }
        };
        getAllCities();
    }, []);

    const getSingleCity = useCallback(
        async (id: string) => {
            if (city?.id === Number(id)) return;

            dispatch({ type: 'loading' });
            try {
                const res = await fetch(`${BASE_URL}/cities?id=${id}`);
                const data: City[] = await res.json();

                dispatch({
                    type: 'city/loaded',
                    payload: data[0],
                });
            } catch (err) {
                if (err instanceof Error) console.error(err.message);
            }
        },
        [city?.id]
    );

    const createCity = async (payload: City) => {
        dispatch({ type: 'loading' });
        try {
            const res = await fetch(`${BASE_URL}/cities`, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application-json',
                },
            });
            const newCity: City = await res.json();

            dispatch({
                type: 'city/created',
                payload: [...(cities as City[]), newCity],
            });
        } catch (err) {
            if (err instanceof Error) console.error(err.message);
        }
    };

    const deleteCity = async (id: string) => {
        dispatch({ type: 'loading' });
        try {
            const res = await fetch(`${BASE_URL}/cities/${id}`, {
                method: 'DELETE',
            });
            const deletedCity: City = await res.json();

            dispatch({
                type: 'city/deleted',
                payload: cities?.filter((city) => city?.id !== deletedCity?.id),
            });
        } catch (err) {
            if (err instanceof Error) console.error(err.message);
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
                deleteCity,
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
};

export { CitiesContext, CitiesProvider };
