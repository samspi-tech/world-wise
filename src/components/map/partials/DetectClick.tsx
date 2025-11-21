import { useMapEvents } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';

const DetectClick = () => {
    const navigate = useNavigate();

    useMapEvents({
        click: (e) => {
            const { lat, lng } = e.latlng;
            navigate(`form?lat=${lat}&lng=${lng}`);
        },
    });

    return null;
};

export default DetectClick;
