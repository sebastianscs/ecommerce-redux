import { HeaderContainer, NavContainer } from "./styles";
import cart from "../../assets/cart.svg";

const Header = ({ cartVisible, setCartVisible }) => {
    
    const handleCartClick = (e) => {
        setCartVisible(e.target.value)
    }

    return(
        <HeaderContainer>
            <h1>Kim Store</h1>
            <NavContainer>
                <a href="/">Inicio</a>
                <a href="/">Productos</a>
                <a href="/">Contacto</a>
                <img src={cart} alt="cart.svg" onClick={handleCartClick}/>
            </NavContainer>
        </HeaderContainer>
    )
}

export default Header;