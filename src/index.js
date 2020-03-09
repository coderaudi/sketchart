import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import App from './container/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';  // dev extenstion 

import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import Thunk from 'redux-thunk';
import createHistory from 'history/createHashHistory';
import { Router, Route, Switch } from 'react-router-dom';
import reducers from './reducers/index';
import 'antd/dist/antd.css'; // antd style

const history = createHistory(); // acess history to every page
const middleware = routerMiddleware(history);

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(middleware , Thunk),
    // other store enhancers if any
  ));

ReactDOM.render(
    <Provider store={store}>

        <Router history={history}>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </Router>

    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
