import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import cartReducer from '../features/cart/reducer'
import productsReducer from '../features/product-listing/reducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    form: formReducer
})
// we use combineReducers to combine multilple reducers into rootReducer

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;

// so we can get it into our index file
