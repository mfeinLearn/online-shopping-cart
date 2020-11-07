const cartReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD':
        // return a new array that is going to have all of the old items from state plus the new item that comes from the payload
            return [...state, action.payload]

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
