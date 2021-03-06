import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage'
import CartPage from './pages/cartpage'
import CheckoutPage from './pages/checkoutpage'
import OrdersPage from './pages/orderspage'

const Router = () => (
    <Switch> // which allows the page to switch based on the route // Switch monitors the url// when url changes we are going to that route that matches
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cart' component={CartPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route path='/orders/:id' component={OrdersPage} />
    </Switch>
)


export default Router
