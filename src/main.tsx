import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CitiesProvider } from './contexts/CitiesContext.tsx';
import { FakeAuthProvider } from './contexts/FakeAuthContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <FakeAuthProvider>
            <CitiesProvider>
                <App />
            </CitiesProvider>
        </FakeAuthProvider>
    </StrictMode>
);
