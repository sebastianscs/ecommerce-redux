import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../state/store.slice"
const store = configureStore ({
    reducer: {
        products: productsReducer,
    },
});

export default store;