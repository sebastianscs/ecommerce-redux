
import React from 'react';
import { ProductsList, Product } from "./styles";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../state/store.slice';

const Products = () => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return(
        <>
            <ProductsList aria-label='Listado de productos'>
                {products && products.map(product => (
                    <Product key={product.id} id={product.name}>
                        <img src={product.image} alt={product.image}/>
                        <h2>{ product.name }</h2>
                        <p>$ { product.price }.00</p>
                        <button role='button' onClick={() => handleAddToCart(product)}>Agregar al carrito :3</button>
                    </Product>   
                ))}
            </ProductsList>
        </>
    )
}

export default Products;

