import React from 'react'

export default function ProductListItem(props) {
    const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0]// that filter call will return an array of one item. we just want to grab that first index.
    return <div className='product-list-item'>
    <h3> {props.product.name} </h3>
    <img
    height={100}
    title={props.name}
    src={`/products/${props.product.image}`}
    />
    <div>{props.product.description}</div>
    <div>${props.product.price}</div>
    <div>
    <button
    //{/*this takes in an item - we need to call this in an arrow function so we click on it it fires that function */}
        onClick={() => props.addToCart(props.product)}>
        Add to cart ({
            (thisItemInCart && thisItemInCart.quantity) || 0
        })
    </button>
    </div>
    </div>
}
// (thisItemInCart && thisItemInCart.quantity) || 0
//.. this will evaluate to true if so the quantity will print out
//.. but if false we will get a 0

// extra note for ProductListItem
// what we first do is find the first item (the item that is in this ProductListItem component) and
//.. we want to find it inside of our cart then we can ask the question... is the item in the cart?
// if it is how many are there and if their are that many items then you are going to put that number inside of the
//.. () ^^^ but if their is not any items in the cart or if it dones not exist in the cart at all then just return 0
