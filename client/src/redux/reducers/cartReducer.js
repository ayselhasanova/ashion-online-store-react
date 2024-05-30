import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_COUNTER, DECREASE_COUNTER } from '../actions/cartActions';

const initialState = {
    cart: [],
    totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingProductIndex = state.cart.findIndex(product => product._id === action.payload._id);
            if (existingProductIndex !== -1) {
                const updatedCart = [...state.cart];
                updatedCart[existingProductIndex].counter += 1;
                return {
                    ...state,
                    cart: updatedCart,
                    totalPrice: state.totalPrice + action.payload.price,
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, counter: 1 }],
                    totalPrice: state.totalPrice + action.payload.price,
                };
            }
        case REMOVE_FROM_CART:
            const removedProduct = state.cart.find(product => product._id === action.payload);
            const updatedTotalPrice = state.totalPrice - (removedProduct.price * removedProduct.counter);
            return {
                ...state,
                cart: state.cart.filter(product => product._id !== action.payload),
                totalPrice: updatedTotalPrice,
            };
        case INCREASE_COUNTER:
            return {
                ...state,
                cart: state.cart.map(product => {
                    if (product._id === action.payload) {
                        return { ...product, counter: product.counter + 1 };
                    }
                    return product;
                }),
                totalPrice: state.totalPrice + state.cart.find(product => product._id === action.payload).price,
            };
        case DECREASE_COUNTER:
            const productToUpdate = state.cart.find(product => product._id === action.payload);
            if (productToUpdate.counter === 1) {
                const updatedCart = state.cart.filter(product => product._id !== action.payload);
                return {
                    ...state,
                    cart: updatedCart,
                    totalPrice: state.totalPrice - productToUpdate.price,
                };
            } else {
                return {
                    ...state,
                    cart: state.cart.map(product => {
                        if (product._id === action.payload) {
                            return { ...product, counter: product.counter - 1 };
                        }
                        return product;
                    }),
                    totalPrice: state.totalPrice - productToUpdate.price,
                };
            }
        default:
            return state;
    }
};

export default cartReducer;
