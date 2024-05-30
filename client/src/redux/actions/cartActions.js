export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});

export const increaseCounter = (productId) => ({
    type: INCREASE_COUNTER,
    payload: productId,
});

export const decreaseCounter = (productId) => ({
    type: DECREASE_COUNTER,
    payload: productId,
});
