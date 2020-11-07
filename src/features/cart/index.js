import React from 'react'
import { connect } from 'react-redux'

// currently our cart items are just an array they dont actually
//.. have a quantity
// we are going to create a function that is going to count
//.. those up
export const cartItemsWithQuantities = (cartItems) => {
    return cartItems.reduce((acc, item) => {
        // item -> is in our cartItems
        // item2 -> is in our acc
        const filteredItem = acc.filter(item2 => item2.id === item.id)[0]// [0] - this means find the first item that it finds
        filteredItem !== undefined
        ? filteredItem.quantity++
        // if the item does not exist inside of the acc (ie. if the acc is empty or does not have that item)
        : acc.push({ ...item,  quantity: 1, })// then push all of the values from item and quantity of 1
        return acc // return the acc so we can have access to the acc on the next step
    }, [])
}

// reduce() -> gives us a acc and an item for each iteration
//.. we want to go over each of the items and count the
//.. quantities.

// the first argument of reduce: the function that you want
//.. to call for every iteration

// the second argument of reduce: is what ever the acc variable is
//.. is going to start off as. In our case it is going to start off
//.. as an empty array

// We are going to iterate over cartItems and for each one we
//.. are going to call our arrow function

// Example of how the acc and the reducer works:
//
// cartItems = [
//     {
//         id: 1,
//     },
//     {
//         id: 1,
//     },
//     {
//         id: 2,
//     },
// ]
//
// acc = [
//     {
//         id: 1,
//         quantity: 2,
//     },
//     {
//         id: 2,
//         quantity: 1,
//     }
// ]

// what is the spread operator:
// if the following is what we have ->
// {...item}
// item: { id: 1. name: 'foo'}
// then -> {...item} => { id: 1. name: 'foo'} we are just dumping what is in item into that hash
