import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
