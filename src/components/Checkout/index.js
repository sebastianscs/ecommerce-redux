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
        try{
            navigate('/products');
            dispatch(buyAllProducts());
        } catch (err){
            console.err(err)
        }
        
    }
    return(
        <>
            <CheckoutContainer aria-label="Detalles de compra">
                <CheckoutTitles aria-label="Titulos del detalles de la compra">
                    <Titles id="Producto">Producto</Titles>
                    <Titles id="Precio">Precio</Titles>
                    <Titles id="Cantidad">Cantidad</Titles>
                </CheckoutTitles>
                {cart.map(product => (
                    <CheckoutProduct key={product.id} id={product.name}>
                        <ProductText>{product.name}</ProductText>
                        <ProductText>$ {product.realPrice}</ProductText>
                        <ProductText>{product.quantity}</ProductText>
                    </CheckoutProduct>
                ))}
                <CheckoutTotalContainer aria-label="Total de compra">
                    <CheckoutTotalTitle>Total</CheckoutTotalTitle>
                    <CheckoutTotal>${total}</CheckoutTotal>
                </CheckoutTotalContainer>

                <CheckoutButton onClick={handleBuyAllProducts} aria-label="Boton de compra" role="button">Comprar</CheckoutButton>
            </CheckoutContainer>

            
        </>
    );
}

export default Checkout;