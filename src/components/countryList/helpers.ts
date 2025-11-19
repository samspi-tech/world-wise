import type { Cities } from 'data/types';
import type { Country } from './CountryList';

type Countries = Country[];

export const getCountriesWithoutDuplicates = (cities: Cities) => {
    const countries = cities?.reduce<Countries>((acc, city) => {
        const { id, country, emoji } = city;

        const isCountryDuplicate = acc
            .map(({ name }) => name)
            .includes(country);

        if (isCountryDuplicate) {
            return acc;
        } else {
            return [
                ...acc,
                {
                    id,
                    emoji,
                    name: country,
                },
            ];
        }
    }, []);

    return countries;
};
