import { NavLink } from 'react-router-dom';

const PageNav = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/">Homepage</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/pricing">Pricing</NavLink>
            </ul>
        </nav>
    );
};

export default PageNav;
