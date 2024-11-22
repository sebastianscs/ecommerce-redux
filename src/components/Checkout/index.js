import { React } from "react";
import { CheckoutButton, CheckoutContainer, CheckoutProduct, CheckoutTitles, CheckoutTotal, CheckoutTotalContainer, CheckoutTotalTitle, ProductText, Titles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { buyAllProducts } from "../../state/store.slice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const cart = useSelector(state => state.products.cart);
    const total = cart.reduce((acc, product) => acc + product.realPrice * product.quantity, 0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleBuyAllProducts = () => {
        alert('Gracias por su compra :3')
        navigate('/products');
        dispatch(buyAllProducts());
    }
    return(
        <>
            <CheckoutContainer>
                <CheckoutTitles>
                    <Titles>Producto</Titles>
                    <Titles>Precio</Titles>
                    <Titles>Cantidad</Titles>
                </CheckoutTitles>
                {cart.map(product => (
                    <CheckoutProduct key={product.id}>
                        <ProductText>{product.name}</ProductText>
                        <ProductText>$ {product.realPrice}</ProductText>
                        <ProductText>{product.quantity}</ProductText>
                    </CheckoutProduct>
                ))}
                <CheckoutTotalContainer>
                    <CheckoutTotalTitle>Total</CheckoutTotalTitle>
                    <CheckoutTotal>${total}</CheckoutTotal>
                </CheckoutTotalContainer>

                <CheckoutButton onClick={handleBuyAllProducts}>Comprar</CheckoutButton>
            </CheckoutContainer>

            
        </>
    );
}

export default Checkout;