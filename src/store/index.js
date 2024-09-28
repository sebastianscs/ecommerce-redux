import { createStore, combineReducers } from 'redux';
import cartReducer from '../reducers/cartReducer';
import productReducer from '../reducers/productsReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;