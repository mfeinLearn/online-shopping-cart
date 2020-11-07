import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import store from './config/store'

const app = <Provider store={store}>
<BrowserRouter> {/*BrowserRouter provider*/}
    <App /> {/* component */} 
</BrowserRouter>
</Provider>

ReactDOM.render(app, document.getElementById('root'));
// a router is like a provider
