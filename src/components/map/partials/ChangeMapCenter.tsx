import { useMap } from 'react-leaflet';

type ChangeMapCenterProps = {
    position: [number, number];
};

const ChangeMapCenter = ({ position }: ChangeMapCenterProps) => {
    const map = useMap();
    map.setView(position);

    return null;
};

export default ChangeMapCenter;
