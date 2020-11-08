const productsReducer = (state=[], action) => {
    switch (action.type) {
        case 'LOAD':
            return action.payload
        default:
            return state
            //return whatever state already existed in the case of the default
    }
}

export default productsReducer
