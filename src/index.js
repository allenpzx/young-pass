import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducers} from './redux/index.js';
import 'antd/dist/antd.css';
import './utils/axios.config.js';
import { ErrorBoundary } from './component/error-boundary.js';

const store = createStore(reducers, window.__PRELOADED_STATE__);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
