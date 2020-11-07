import React from 'react'
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'


export default function ProductListItem(props) {
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
        <AddBtn
            cartItem={props.cartItem}
            product={props.product}
            addToCart={props.addToCart}
        />

        {
            props.cartItem
            ? <RemoveBtn
                cartItem={props.cartItem}
                product={props.product}
                removeFromCart={props.removeFromCart}
            />
            : null
        }

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


// {} -> JS expression
