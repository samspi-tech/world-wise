import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './Map.module.css';
import { useCustomContext } from '@/hooks/useCustomContext';
import ChangeMapCenter from './partials/ChangeMapCenter';
import { CitiesContext } from '@/contexts/CitiesContext';
import DetectClick from './partials/DetectClick';
import { useGeolocation } from '@/hooks/useGeolocation';
import Button from '../button/Button';
import type { Position } from './types';
import { useURLPosition } from '@/hooks/useURLPosition';

const Map = () => {
    const { lat, lng } = useURLPosition();
    const [position, setPosition] = useState<Position>([40, 0]);
    const { cities } = useCustomContext(CitiesContext, 'Cities ctx');
    const { isLoadingGeoPosition, handleGetPosistion, geoPosition } =
        useGeolocation();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (lat && lng) setPosition([lat, lng]);
    }, [lat, lng]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (geoPosition) setPosition([geoPosition.lat, geoPosition.lng]);
    }, [geoPosition]);

    return (
        <div className={styles.mapContainer}>
            {!geoPosition && (
                <Button variant="position" onClick={handleGetPosistion}>
                    {isLoadingGeoPosition ? 'Loading...' : 'Use your position'}
                </Button>
            )}
            <MapContainer
                zoom={6}
                center={position}
                className={styles.map}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {cities?.map((city) => {
                    const { id, position, emoji, cityName } = city!;
                    const { lat, lng } = position;

                    return (
                        <Marker key={id} position={[lat, lng]}>
                            <Popup>
                                <span>{emoji}</span>
                                <span>{cityName}</span>
                            </Popup>
                        </Marker>
                    );
                })}
                <ChangeMapCenter position={position} />
                <DetectClick />
            </MapContainer>
        </div>
    );
};

export default Map;
