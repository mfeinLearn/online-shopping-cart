import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Router from './Router'
// when we click on either Home or Cart our url will change accordingly which would kick off that Router Switch
const Navigation = ({cart}) => <nav>
    <ul className="top-menu">
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/cart'>Cart ({cart.reduce((acc, item) => {
        return acc + item.quantity
    }, 0)})</NavLink></li>
    <li><NavLink to='/checkout'>Check out</NavLink></li>
    </ul>
</nav>

class App extends Component {
    render() {
        return <div className='page-container'>
        <Navigation {...this.props}/>
        <Router />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default withRouter(connect(mapStateToProps)(App));

//withRouter - a high order Component that will allow us to wrap both the connect and the routing
//acc is the thing that gets incremented each time - acc is going to start at 0
//item - each of the items in our cart(each key)

// what cart.reduce do? it allows us to accumelate the multiple quantities by essentually adding up
//.. the actual value of quantity out for each of the array items
