import {
    fakeAuthReducer,
    initialFakeAuthState,
    type FakeAuthState,
} from '@/reducers/fakeAuthReducer';
import { FAKE_USER } from '@/utils/constants';
import { createContext, useReducer } from 'react';

interface FakeAuthContextValues extends FakeAuthState {
    login: (email: string, password: string) => void;
    logout: () => void;
}

const FakeAuthContext = createContext<FakeAuthContextValues | null>(null);

const FakeAuthProvider = ({ children }: React.PropsWithChildren) => {
    const [state, dispatch] = useReducer(fakeAuthReducer, initialFakeAuthState);
    const { user, isAuth } = state;

    const login = (email: string, password: string) => {
        const { email: fakeEmail, password: fakePassword } = FAKE_USER;
        const isValidUser = email === fakeEmail && password === fakePassword;

        if (isValidUser) {
            dispatch({
                type: 'login',
                payload: FAKE_USER,
            });
        }
    };

    const logout = () => dispatch({ type: 'logout' });

    return (
        <FakeAuthContext.Provider
            value={{
                user,
                isAuth,
                login,
                logout,
            }}
        >
            {children}
        </FakeAuthContext.Provider>
    );
};

export { FakeAuthContext, FakeAuthProvider };
