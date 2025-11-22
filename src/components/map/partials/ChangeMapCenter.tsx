import { useMap } from 'react-leaflet';
import type { Position } from '../types';

type ChangeMapCenterProps = {
    position: Position;
};

const ChangeMapCenter = ({ position }: ChangeMapCenterProps) => {
    const map = useMap();
    map.setView(position);

    return null;
};

export default ChangeMapCenter;
