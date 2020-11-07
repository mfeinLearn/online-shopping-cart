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

// ACTUAL REDUCER

const cartReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD':
        // return a new array that is going to have all of the old items from state plus the new item that comes from the payload
            return [...state, action.payload]
        //** (more info about add reducer - currently the add action on the cart reducer is creating a new array it is dumping out all of the items
    //.. that was previously in the cart via the spread operator into that array then it adds the new item which is sitting in action.payload
//.. to the end of the array then it returns that whole array as the new state.)

        case 'REMOVE':
        // remove finds the first item that we are trying to remove we are going to get the index of it
        //.. then we are going to return all of the items inside of our state EXCEPT for the one that matches that first index
            const firstMatchIndex = state.indexOf(action.payload)
            // our arrow function is going to say we want the index that does not equal
            //.. the firstMatchIndex -> this is going to give us all of the items except for the
            //.. first match VVV

            // EXAMPLE: if we have 5 buzz lightyears in our state our code below is going to
            //.. filter out the first buzz lightyear and give us the remaining 4 buzz lightyears
            return state.filter((item, index) => index !== firstMatchIndex )

        default: // must have a default
            return state; // that just returns the current state
    }
}

export default cartReducer
