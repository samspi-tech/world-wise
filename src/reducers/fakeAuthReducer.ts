type User = {
    name: string;
    avatar: string;
    email: string;
    password: string;
};

export interface FakeAuthState {
    user: User | null;
    isAuth: boolean;
    isLoading: boolean;
}

type Action =
    | { type: 'loading' | 'logout' }
    | {
          type: 'login';
          payload: User;
      };

const initialFakeAuthState: FakeAuthState = {
    user: null,
    isAuth: false,
    isLoading: false,
};

const fakeAuthReducer = (state: FakeAuthState, action: Action) => {
    switch (action.type) {
        case 'loading': {
            return {
                ...state,
                isLoading: true,
            };
        }
        case 'login': {
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                user: action.payload,
            };
        }
        case 'logout': {
            return {
                ...state,
                isLoading: false,
                isAuth: false,
                user: null,
            };
        }
        default: {
            throw new Error('Unknown action type');
        }
    }
};

export { initialFakeAuthState, fakeAuthReducer };
