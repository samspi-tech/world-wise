import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CityList from './components/cityList/CityList';
import CountryList from './components/countryList/CountryList';
import City from './components/city/City';
import Form from './components/form/Form';
import ProtectedRoutes from './pages/protectedRoutes/ProtectedRoutes';
import SuspenseWrapper from './pages/suspenseWrapper/SuspenseWrapper';

const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const Products = lazy(() => import('./pages/products/Products'));
const Pricing = lazy(() => import('./pages/pricing/Pricing'));
const PageNotFound = lazy(() => import('./pages/pageNotFound/PageNotFound'));
const Login = lazy(() => import('./pages/login/Login'));
const AppLayout = lazy(() => import('./pages/appLayout/AppLayout'));

const App = () => {
    return (
        <Router>
            <Routes>
                <Route element={<SuspenseWrapper />}>
                    <Route index element={<Homepage />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/login" element={<Login />} />

                    <Route element={<ProtectedRoutes />}>
                        <Route path="/app" element={<AppLayout />}>
                            <Route path="cities" element={<CityList />} />
                            <Route path="cities/:cityId" element={<City />} />
                            <Route path="countries" element={<CountryList />} />
                            <Route path="form" element={<Form />} />
                        </Route>
                    </Route>

                    <Route path="/*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
