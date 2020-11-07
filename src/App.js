import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import Router from './Router'
// when we click on either Home or Cart our url will change accordingly which would kick off that Router Switch
const Navigation = (props) => <nav>
    <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/cart'>Cart</NavLink></li>
    </ul>
</nav>

class App extends Component {
    render() {
        return <div className='page-container'>
        <Navigation />
        <Router />
        </div>
    }
}

export default App;
