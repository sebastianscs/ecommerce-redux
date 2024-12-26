import { createSlice } from "@reduxjs/toolkit";

import chopper from "../assets/tshirt-choppa.jpeg";
import luffy from "../assets/tshirt-luffy.jpeg";
import zoro from "../assets/tshirt-zoro.jpeg";
import yonkos from "../assets/tshirt-yonkos.jpeg";
import cat from "../assets/tshirt-cat.jpeg";
import drake from "../assets/tshirt-drake.jpeg";
import eyes from "../assets/tshirt-eyesblue.jpeg";
import green from "../assets/tshirt-green.jpeg";
import heart from "../assets/tshirt-heart.jpeg";
import yugi from "../assets/tshirt-yugi.jpeg";

const productSlice = createSlice({
    name:'products',

    initialState:{
        products:[
            {id:1, name:"Camisa Chopper", price:180, image:chopper},
            {id:2, name:"Camisa Luffy", price:210, image:luffy},
            {id:3, name:"Camisa Zoro", price:200, image:zoro},
            {id:4, name:"Camisa Yonkous", price:220, image:yonkos},
            {id:5, name:"Camisa Cat Bus", price:185, image:cat},
            {id:6, name:"Camisa Dragon", price:150, image:drake},
            {id:7, name:"Camisa Dragon Ojos Azules", price:190, image:eyes},
            {id:8, name:"Camisa Olla de La Codicia", price:160, image:green},
            {id:9, name:"Camisa Corazon", price:175, image:heart},
            {id:10, name:"Camisa Yu-Gi-Oh", price:180, image:yugi},
            {id:11, name:"Camisa Chopper", price:180, image:chopper},
            {id:12, name:"Camisa Luffy", price:210, image:luffy},
            {id:13, name:"Camisa Zoro", price:200, image:zoro},
            {id:14, name:"Camisa Yonkous", price:220, image:yonkos},
            {id:15, name:"Camisa Cat Bus", price:185, image:cat},
            {id:16, name:"Camisa Dragon", price:150, image:drake},
            {id:17, name:"Camisa Dragon Ojos Azules", price:190, image:eyes},
            {id:18, name:"Camisa Olla de La Codicia", price:160, image:green},
            {id:19, name:"Camisa Corazon", price:175, image:heart},
            {id:20, name:"Camisa Yu-Gi-Oh", price:180, image:yugi},
        ],
        cart:[],
        totalCart: 0,
        users:[],
        currentUser: null,
    },
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cart.find((product) => product.id === action.payload.id);
            
            if (existingProduct) {
                // Si el producto ya está en el carrito, incrementa la cantidad
                existingProduct.quantity += 1;
                existingProduct.price = existingProduct.realPrice * existingProduct.quantity;
            } else {
                // Si no está en el carrito, lo añade con cantidad inicial de 1
                state.cart.push({ ...action.payload, quantity: 1, realPrice: action.payload.price });
            }
            state.totalCart = state.cart.reduce((total, product) => total + product.realPrice * product.quantity, 0);
        },
        updateQuantity: (state, action) => {
            
            const { productId, quantity } = action.payload
            const product = state.cart.find((product) => product.id === productId);
            if (product) {
                product.quantity = quantity;
                product.price = product.realPrice * product.quantity;
            }
            state.totalCart = state.cart.reduce((total, product) => total + product.realPrice * product.quantity, 0);
        },
        buyAllProducts: (state, action) => {
            state.cart = []
            state.totalCart = 0;
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(product => product.id !== action.payload);
        },
        registerUser: (state, action) => {
            const existingUser = state.users.find((user) => user.username === action.payload.username);
            
            if (existingUser) {
                // If the user existing
                alert('El usuario ya existe')
            } else {
                // Else if , lo añade con cantidad inicial de 1
                state.users.push({ ...action.payload });
            }
        },
        login: (state, action) => {
            const { username, password } = action.payload;
            const user = state.users.find((u) => u.username === username && u.password === password);
            if (user) {
                state.currentUser = user;
            }
        },
        logout: (state) => {state.currentUser = null;}
    }
});


export const { addToCart, removeFromCart, updateQuantity, registerUser, login, logout, buyAllProducts } = productSlice.actions;
const { reducer: productsReducer } = productSlice;
export default productsReducer;