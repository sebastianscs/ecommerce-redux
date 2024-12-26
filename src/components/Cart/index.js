import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../../state/store.slice"
import { BuyButton, CartContainer, CartFooter, TextContainer, TotalPrice, TotalTitle, ProductContainer } from "./styles";
import deleteIcon from "../../assets/delete.png"
import { useNavigate } from "react-router-dom";
const Cart = ({ cartVisible, setCartVisible }) => {
    const cart = useSelector(state => state.products.cart);
    const total = useSelector(state => state.products.totalCart);
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
        if(cart.length-1 === 0){
            setCartVisible(!cartVisible)
        }
    }
    
    const handleChange = (productId, quantity) => {
        dispatch(updateQuantity({ productId, quantity }));
    };

    return(
        <>
            <CartContainer visible={cartVisible}>
                {cart && cart.map(product => (
                    <ProductContainer key={product.id} id={product.name}>
                        <img src={product.image} alt={`Portada de ${product.name}`} width="100" height="100" />
                        <p>{product.name} - ${product.price}</p>
                        <input 
                            value={product.quantity}
                            type="number" 
                            min="1"
                            aria-label="Total de productos"
                            onChange={(e) => handleChange(product.id, e.target.value)}
                        />
                        <i>
                            <img 
                                onClick={() => handleRemoveFromCart(product.id)} 
                                src={deleteIcon}
                                alt="delete-icon"
                            />
                        </i>
                    </ProductContainer>
                ))}
                
                <CartFooter>
                    <TextContainer aria-label="Total del carrito de compra">
                        <TotalTitle>Total</TotalTitle>
                        <TotalPrice>$ {total.toFixed(2)}</TotalPrice>
                    </TextContainer>
                    <BuyButton onClick={handleBuyProducts} aria-label="Boton de carrito de productos">Comprar</BuyButton>
                </CartFooter>
            </CartContainer>
        </>
    )
}

export default Cart;