import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Products from './pages/products/Products';
import Pricing from './pages/pricing/Pricing';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import Login from './pages/login/Login';
import AppLayout from './pages/appLayout/AppLayout';
import CityList from './components/cityList/CityList';
import CountryList from './components/countryList/CountryList';
import City from './components/city/City';
import Form from './components/form/Form';
import ProtectedRoutes from './pages/protectedRoutes/ProtectedRoutes';

const App = () => {
    return (
        <Router>
            <Routes>
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
            </Routes>
        </Router>
    );
};

export default App;
