//HELPER FUNCTIONS

// VV getting all of the items that are not that item - so we can get back the curent shopping cart without the item that we are trying to add
const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)

// VV getting all of the items that are that item
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0] // this is going to return an array of one item [0] is used to get that item

const addToCart = (cart, item) => {
    const cartItem = itemInCart(cart, item)
    return cartItem === undefined
    ? [...cartWithoutItem(cart, item), { ...item, quantity: 1}]
    : [...cartWithoutItem(cart, item), {...cartItem, quantity: cartItem.quantity + 1}]
}

const removeFromCart = (cart, item) => {
    return item.quantity === 1
    ? [ ...cartWithoutItem(cart, item)]
    : [ ...cartWithoutItem(cart, item), { ...item, quantity: item.quantity - 1 }]
}

const removeAllFromCart = (cart, item) => {
    return [ ...cartWithoutItem(cart, item)]
}


// ACTUAL REDUCER

const cartReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD':
            // state is our cart
            // action.payload is the item that we are trying to add
            return addToCart(state , action.payload)
        case 'REMOVE':
            return removeFromCart(state, action.payload)
        case 'REMOVE_ALL':
            return removeAllFromCart(state, action.payload)
        default: // must have a default
            return state; // that just returns the current state
    }
}

export default cartReducer
