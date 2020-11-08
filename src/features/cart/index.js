import React from 'react'
import { connect } from 'react-redux'

// for sort:
    // 1st time you call sort 0 index and  1 index
    // 1st time you call sort 1 index and  2 index
    // 1st time you call sort 2 index and  3 index
function sort(items) {
    return items.sort((a, b) => a.id - b.id)
}

function Cart(props) {
    return <table>
    <thead>
    <tr>
    <th>Item</th>
    <th>Quantity</th>
    <th></th>
    <th></th>
    </tr>
    </thead>
    <thead>
    {
        sort(props.cart).map(item => <tr>
            <td>{ item.name }</td>
            <td>{ item.quantity }</td>
            <td>
            <button
            onClick={() => props.addToCart(item)}
            >+
            </button>

            <button
            onClick={() => props.removeFromCart(item)}
            >-
            </button>
            </td>
                <button
                onClick={() => props.removeAllFromCart(item)}
                >
                Remove all from cart
                </button>
            <td>
            </td>
        </tr>)
    }
    </thead>
    </table>
}

//-> we need to get the state from redux so we can map it to props
//-> we are going to return the keys that we care about which is cart which would be state.cart
function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

// add some functions that we want to add on to props
function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })

        },
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE_ALL', payload: item })

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
