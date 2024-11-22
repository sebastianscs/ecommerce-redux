import { Link } from 'react-router-dom';
import { HeaderContainer, NavContainer } from "./styles";
import cart from "../../assets/cart.svg";

const Header = ({ cartVisible, setCartVisible }) => {
    
    const handleCartClick = (e) => {
        setCartVisible(e.target.value);
    };

    return(
        <HeaderContainer>
            <h1>Kim Store</h1>
            <NavContainer>
                <Link to="/">Inicio</Link>
                <Link to="/products">Productos</Link>
                <Link to="/contact">Contacto</Link>
                <img src={cart} alt="cart.svg" onClick={handleCartClick} />
            </NavContainer>
        </HeaderContainer>
    );
};

export default Header;
