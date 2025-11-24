import type { Cities, City } from 'data/types';

export type CitiesState = {
    city: City;
    cities: Cities;
    isLoading: boolean;
};

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
    switch (action.type) {
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
                cities: action.payload as Cities,
            };
        }
        case 'city/loaded': {
            return {
                ...state,
                isLoading: false,
                city: action.payload as City,
            };
        }
        case 'city/created': {
            return {
                ...state,
                isLoading: false,
                cities: action.payload as Cities,
            };
        }
        case 'city/deleted': {
            return {
                ...state,
                isLoading: false,
                cities: action.payload as Cities,
            };
        }
        default: {
            throw new Error('Unknown action type');
        }
    }
};

export { initialCitiesState, citiesReducer };
