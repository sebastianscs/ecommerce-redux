import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../actions/actions";
import { CartContainer } from "./styles";
import deleteIcon from "../../assets/delete.png"
const Cart = ( {cartVisible} ) => {
    const cart = useSelector(state => state.cart);
    const dispatch  =useDispatch();

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    }
    
    return(
        <>
            <CartContainer visible={cartVisible}>
                {cart.map(product => (
                    <div key={product.id}>
                        <img src={product.image} alt={product.name} width="100" height="100" />
                        <p>{product.name} - ${product.price} - {product.quantity}</p>
                        <i><img onClick={() => handleRemoveFromCart(product.id)} src={deleteIcon} alt="delete-icon"/></i>
                    </div>
                ))}
            </CartContainer>
        </>
    )
}

export default Cart;