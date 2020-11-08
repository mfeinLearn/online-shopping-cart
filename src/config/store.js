import { createStore, combineReducers } from 'redux'
import cartReducer from '../features/cart/reducer'
import productsReducer from '../features/product-listing/reducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
})
// we use combineReducers to combine multilple reducers into rootReducer

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;

// so we can get it into our index file
