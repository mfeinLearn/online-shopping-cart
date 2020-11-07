import React from 'react'

export default function RemoveButton(props) {
    return <button
    //{/*this takes in an item - we need to call this in an arrow function so we click on it it fires that function */}
        onClick={() => props.removeFromCart(props.cartItem)}
        >Remove</button>
}
