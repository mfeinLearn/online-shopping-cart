import React from 'react'

export default function AddButton(props) {
    return <button
    //{/*this takes in an item - we need to call this in an arrow function so we click on it it fires that function */}
        onClick={() => props.addToCart(props.product)}>
        Add to cart ({
            (props.cartItem && props.cartItem.quantity) || 0
        })
    </button>
}
