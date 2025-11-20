import { useNavigate } from 'react-router-dom';

export const useNavigateBack = () => {
    const navigate = useNavigate();

    const handleNavigateBack = () => navigate(-1);

    return handleNavigateBack;
};
