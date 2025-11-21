import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './Map.module.css';
import { useCustomContext } from '@/hooks/useCustomContext';
import ChangeMapCenter from './partials/ChangeMapCenter';
import { CitiesContext } from '@/contexts/CitiesContext';
import DetectClick from './partials/DetectClick';

const Map = () => {
    const [searchParams] = useSearchParams();
    const { cities } = useCustomContext(CitiesContext, 'Cities ctx');
    const [position, setPosition] = useState<[number, number]>([40, 0]);

    const lat = Number(searchParams.get('lat'));
    const lng = Number(searchParams.get('lng'));

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (lat && lng) setPosition([lat, lng]);
    }, [lat, lng]);

    return (
        <div className={styles.mapContainer}>
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
