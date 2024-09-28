const cartReducer =  (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
      // Verifica si el producto ya está en el carrito
            const existingProduct = state.find((product) => product.id === action.payload.id);
            if (existingProduct) {
                // Si ya está en el carrito, incrementa la cantidad
                return state.map((product) =>
                product.id === action.payload.id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
                );
            } else {
                // Si no está en el carrito, lo añade con cantidad inicial de 1
                return [...state, action.payload];
            }

        case 'UPDATE_QUANTITY':
            return state.map((product) =>
                product.id === action.payload.productId
                ? { ...product, quantity: action.payload.quantity }
                : product
            );
        case "REMOVE_FROM_CART":
            return state.filter(product => product.id !== action.payload);
        default:
            return state;
    }
};

export default cartReducer;