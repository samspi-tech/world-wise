import type { Cities, City } from 'data/types';

export interface CitiesState {
    city: City;
    cities: Cities;
    isLoading: boolean;
}

type Action =
    | { type: 'loading' }
    | { type: 'city/loaded'; payload: City }
    | {
          type: 'cities/loaded' | 'city/created' | 'city/deleted';
          payload: Cities;
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
                cities: action.payload,
            };
        }
        case 'city/loaded': {
            return {
                ...state,
                isLoading: false,
                city: action.payload,
            };
        }
        case 'city/created': {
            return {
                ...state,
                isLoading: false,
                cities: action.payload,
            };
        }
        case 'city/deleted': {
            return {
                ...state,
                isLoading: false,
                cities: action.payload,
            };
        }
        default: {
            throw new Error('Unknown action type');
        }
    }
};

export { initialCitiesState, citiesReducer };
