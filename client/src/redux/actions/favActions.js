export const ADD_TO_FAV = 'ADD_TO_FAV';
export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV';

export const addToFav = (product) => ({
    type: ADD_TO_FAV,
    payload: product,
});

export const removeFromFav = (productId) => ({
    type: REMOVE_FROM_FAV,
    payload: productId,
});