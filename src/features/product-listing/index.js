import React from 'react'
import ProductListItem from './product-list-item'
import { connect } from 'react-redux'

import fetchApi from '../../modules/fetch-api'


// we are going to change this from a stateless function to a lifecycle class because we need to wire in
//.. to component did mount so when this component mounts it will do a async request to the api
class ProductListing extends React.Component {
    // componentDidMount is going to fire as soon as our component successfully mounted on the page
    //.. when that happens we are going to need to do a fetch to the api to get the data
    componentDidMount() {
        const { loadProducts } = this.props
        fetchApi('get', `http://localhost:3002/api/v1/products`)
        .then((json => {
            loadProducts(json)
        }))
    }
    render() {
        const { addToCart, removeFromCart, products, cart} = this.props
        return <div className='product-listing'>
            {
                products.map( product =>
                    <ProductListItem
                    product={product}
                    // {/*addToCart comes from mapDispatchToProps so we can pass it into ProductListItem*/}
                    addToCart={addToCart}
                    removeFromCart = {removeFromCart}
                    cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
                />)
            }
        </div>
    }
}

// mapStateToProps -> which defines which key out of our redux store we are going to allow as our props inside our
//.. current component. So in this case we want the cart key to go to the cart reducer inside of our redux store

// mapDispatchToProps -> we want to be able to dispatch and add to cart

// This is going to grab all of the values for cart state
//.. and it is going to map it to props
// ex: we can say props.cart and get those values - it will give us everything inside of the cart inside of this component
function mapStateToProps(state) {
    return {
        cart: state.cart, // we are pulling it out of redux and we are putting it into a prop called cart
        products: state.products //we also need to get that out of state (props.products) //this is going to map that state from the redux store on to our props with a key called products
    }
}

// we have some actions that is going to add and remove stuff from the cart.
// Which will map all of our actions to props on this component
// and the argument is dispatch( which is short for store.dispatch which dispatches an action on to our store )
function mapDispatchToProps(dispatch) {
    // we are going to return a new hash. addToCart is going to be the action
    return {
        // when we want to add something to the redux store
        loadProducts: (products) => {
            dispatch({ type: 'LOAD', payload: products })
        },
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        // when we want to remove something from the redux store
        removeFromCart: (item) => {
            // we are going to dispatch another js object
            dispatch({ type: 'REMOVE', payload: item })

        }
    }
}

// now we have to connect these two functions and the redux store to our component
// connect is a function that takes our two functions and it returns a few function(newFunc)
// and the new function we pass in our component ProductListing
export default connect( mapStateToProps, mapDispatchToProps)(ProductListing) // ---> export default newFunc(ProductListing)
