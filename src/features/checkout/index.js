import React from 'react'
import { connect } from 'react-redux'

import Cart from '../cart'
import CheckoutForm from './form'
import fetchApi from '../../modules/fetch-api'

function submitOrder(values, cart) {
    const { email, name } = values.order
// https://student-example-api.herokuapp.com/v1/orders/1.json
    fetchApi('post', `https://student-example-api.herokuapp.com/v1/orders.json`, {
        order: {
            name,
            email,
            order_items_attributes: cart.map(item => ({
                product_id: item.id,
                qty: item.quantity
            }))
        }
    }).then(json => {
        if(json.errors) {
            alert('something went wrong!')
            return
        }
        document.location.href = `/orders/${json.id}`
    })
}

function Checkout(props) {
    const { cart } = props
    return <div>
        <div style ={{ border: '1px solid black' }}>
            <Cart />
        </div>

        <CheckoutForm onSubmit={(values) => submitOrder(values, cart)}/>
    </div>
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}


// this will connect our component to the redux store
// this function calls another function which we are going to pass in our Checkout component to that
export default connect(mapStateToProps)(Checkout)
