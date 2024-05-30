// favReducer.js
import { ADD_TO_FAV, REMOVE_FROM_FAV } from '../actions/favActions';

const initialState = {
    favs: [],
};

const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAV:
            const existingFavIndex = state.favs.findIndex(product => product._id === action.payload._id);
            if (existingFavIndex === -1) {
                return {
                    ...state,
                    favs: [...state.favs, action.payload],
                };
            }
            return state;
        case REMOVE_FROM_FAV:
            return {
                ...state,
                favs: state.favs.filter(product => product._id !== action.payload),
            };
        default:
            return state;
    }
};

export default favReducer;
