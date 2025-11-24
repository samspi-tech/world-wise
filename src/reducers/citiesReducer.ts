import type { Cities, City } from 'data/types';

export interface CitiesState {
    city: City;
    cities: Cities;
    isLoading: boolean;
}

type Action = {
    type:
        | 'loading'
        | 'cities/loaded'
        | 'city/loaded'
        | 'city/created'
        | 'city/deleted';
    payload?: City | Cities;
};

const initialCitiesState: CitiesState = {
    city: {} as City,
    cities: [],
    isLoading: false,
};

const citiesReducer = (state: CitiesState, action: Action) => {
    const { type, payload } = action;

    const city = payload as City;
    const cities = payload as Cities;

    switch (type) {
        case 'loading': {
            return {
                ...state,
                isLoading: true,
            };
        }
        case 'cities/loaded': {
            return {
                ...state,
                isLoading: false,
                cities,
            };
        }
        case 'city/loaded': {
            return {
                ...state,
                isLoading: false,
                city,
            };
        }
        case 'city/created': {
            return {
                ...state,
                isLoading: false,
                cities,
            };
        }
        case 'city/deleted': {
            return {
                ...state,
                isLoading: false,
                cities,
            };
        }
        default: {
            throw new Error('Unknown action type');
        }
    }
};

export { initialCitiesState, citiesReducer };
