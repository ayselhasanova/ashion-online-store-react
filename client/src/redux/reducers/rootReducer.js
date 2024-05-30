import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import favReducer from './favReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    favs: favReducer,
});

export default rootReducer;
