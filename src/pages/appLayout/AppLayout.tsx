import Sidebar from '@/components/sidebar/Sidebar';
import styles from './AppLayout.module.css';
import Map from '@/components/map/Map';

const AppLayout = () => {
    return (
        <div className={styles.app}>
            <Sidebar />
            <Map />
        </div>
    );
};

export default AppLayout;
