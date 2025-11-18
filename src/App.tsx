import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Products from './pages/products/Products';
import Pricing from './pages/pricing/Pricing';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import Login from './pages/login/Login';
import AppLayout from './pages/appLayout/AppLayout';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/login" element={<Login />} />

                <Route path="/app" element={<AppLayout />}>
                    <Route index element={<p>List of cities</p>} />
                    <Route path="cities" element={<p>List of cities</p>} />
                    <Route path="countries" element={<p>Countries</p>} />
                    <Route path="form" element={<p>Form</p>} />
                </Route>

                <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
