SPREAD OPERATOR:

Great example of the spread operator:
say we have 7 items in the state it is going to take those 7 items out of the original state
array and it is going to dump them one by one into this new array
[...state]

Practical example for project:
We are going to use immutable Javascript
to add that value

Spread operator - to take everything that is already in the state then we are going to
take action.payload which basically takes the item that we are adding to the cart
and adds it to the end
return [...state, action.payload]
so what this does it that it returns a brand new array
that is going to have the values of the old array plus the new value we are adding in
--------------------------------------------------------------------------------------------
REMOVING AN ITEM IN THE CART:

example: say you add 5 buzz lightyears to your cart when you click remove you only want to remove the first buzz lightyear from the cart not all       the buzz lightyears from the cart
state  
