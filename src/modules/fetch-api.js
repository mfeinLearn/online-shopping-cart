import fetch from 'isomorphic-fetch'
// require('es6-promise').polyfill()

// in es6 if the key and value are the same we can just use one of those
//.. EXAMPLE: if method is key and method is value we can use method! as seen below VVV

// method -> HTTP methods
export default function fetchApi(method, url, data) {
    // so that data actually gets passed - we create a js object we pass a js object that js object then become
    //.. stringifyed as json and gets passed to the server
    const body = method.toLowerCase() === 'get' ? {} : { body: JSON.stringify(data) }

    return fetch(url, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        credentials: 'same-origin',
        ...body,
    }).then(response => response.json())
}
