import { Link } from 'react-router-dom';
import { ButtonCart, HeaderContainer, NavContainer } from "./styles";
//import cart from "../../assets/cart.svg";
import { useSelector } from 'react-redux';

const Header = ({ cartVisible, setCartVisible }) => {
    
    const cartState = useSelector( state => state.products.cart);
    const handleCartClick = () => {
        setCartVisible(!cartVisible);
    };

    return(
        <HeaderContainer>
            <h1>Kim Store</h1>
            <NavContainer aria-label='Barra de navegacion'>
                <Link id='Inicio' to="/">Inicio</Link>
                <Link id='Productos' to="/products">Productos</Link>
                <Link id='Contacto' to="/contact">Contacto</Link>
                <ButtonCart 
                    id='Boton de carrito de compra'
                    onClick={handleCartClick} 
                    disabled={cartState.length === 0} 
                    visible={cartState.length}
                />
            </NavContainer>
        </HeaderContainer>
    );
};

export default Header;
