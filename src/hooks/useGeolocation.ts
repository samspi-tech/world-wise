import { useState } from 'react';

type DefaultPosition = {
    lat: number;
    lng: number;
} | null;

export const useGeolocation = (defaultPosition: DefaultPosition = null) => {
    const [error, setError] = useState('');
    const [geoPosition, setGeoPosition] = useState(defaultPosition);
    const [isLoadingGeoPosition, setIsLoadingGeoPosition] = useState(false);

    const handleGetPosistion = () => {
        if (!navigator.geolocation) {
            return setError('Your browser do not support geolocation');
        }

        setIsLoadingGeoPosition(true);
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;

                setGeoPosition({ lat, lng });
                setIsLoadingGeoPosition(false);
            },
            (err) => {
                if (err instanceof Error) setError(err.message);
                setIsLoadingGeoPosition(false);
            }
        );
    };

    return {
        error,
        isLoadingGeoPosition,
        geoPosition,
        handleGetPosistion,
    };
};
