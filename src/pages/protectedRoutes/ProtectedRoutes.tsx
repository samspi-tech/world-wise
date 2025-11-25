import { Navigate, Outlet } from 'react-router-dom';
import { FakeAuthContext } from '@/contexts/FakeAuthContext';
import { useCustomContext } from '@/hooks/useCustomContext';

const ProtectedRoutes = () => {
    const { isAuth } = useCustomContext(FakeAuthContext, 'FakeAuth ctx');

    return isAuth ? <Outlet /> : <Navigate to="/" replace={true} />;
};

export default ProtectedRoutes;
