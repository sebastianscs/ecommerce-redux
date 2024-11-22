import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../state/store.slice"
import { BuyButton, CartContainer, CartFooter, TextContainer, TotalPrice, TotalTitle, ProductContainer } from "./styles";
import deleteIcon from "../../assets/delete.png"
import { useNavigate } from "react-router-dom";
const Cart = ({ cartVisible, setCartVisible }) => {
    const cart = useSelector(state => state.products.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleBuyProducts = (e) => {
        if (cart.length !== 0){
            navigate('/checkout');
            setCartVisible(e.target.value)
        }
    }
    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    }
    const total = cart.reduce((acc, product) => acc + product.realPrice * product.quantity, 0);
    return(
        <>
            <CartContainer visible={cartVisible}>
                {cart && cart.map(product => (
                    <ProductContainer key={product.id}>
                        <img src={product.image} alt={product.name} width="100" height="100" />
                        <p>{product.name} - ${product.price} - {product.quantity}</p>
                        <i><img onClick={() => handleRemoveFromCart(product.id)} src={deleteIcon} alt="delete-icon"/></i>
                    </ProductContainer>
                ))}
                
                <CartFooter>
                    <TextContainer>
                        <TotalTitle>Total</TotalTitle>
                        <TotalPrice>$ {total.toFixed(2)}</TotalPrice>
                    </TextContainer>
                    <BuyButton onClick={handleBuyProducts}>Comprar</BuyButton>
                </CartFooter>
            </CartContainer>
        </>
    )
}

export default Cart;