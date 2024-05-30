import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import favReducer from './reducers/favReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    favorites: favReducer,
});

const store = createStore(rootReducer);

export default store;
