import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SpinnerFullPage from '@/components/spinnerFullPage/SpinnerFullPage';

const SuspenseWrapper = () => {
    const location = useLocation();

    return (
        <Suspense fallback={<SpinnerFullPage />} key={location.key}>
            <Outlet />
        </Suspense>
    );
};

export default SuspenseWrapper;
