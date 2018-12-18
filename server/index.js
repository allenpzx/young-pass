import csshook from 'css-modules-require-hook/preset';
import assethook from 'asset-require-hook';
import React from 'react';
import {renderToString, renderToNodeStream} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from '../src/App.js';
import { htmlTemplate } from './html-template.js';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {reducers} from '../src/redux/index.js';

assethook({
    extensions: ['png', 'jpg', 'ico', 'svg']
});

const path = require('path');
const express = require('express');
const app = express();
const PORT = 9093;
const buildPath = require(path.resolve(__dirname, '../build/asset-manifest.json'));

app.use(express.static(path.join(__dirname, '../build')));

// SPA will do
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../build', 'index.html'));
// });

app.get('*', (req, res, next) => {

    const store = createStore(reducers);
    store.dispatch({type: 'ADD'});
    store.dispatch({type: 'ADD'});

    const context = {};
    const rootElement = renderToString(
        <Provider store={store}>
            <StaticRouter
                location={req.url}
                context={context}
            >
                <App/>
            </StaticRouter>
        </Provider>
    )

    if (context.url) {
        res.writeHead(301, {
          Location: context.url
        });
        res.end();
    } else {
        
        const finalState = store.getState();
        res.send(htmlTemplate('YoungPass学生特权卡', rootElement, buildPath, finalState));
    }
})

app.listen(PORT, (error) => {
    if (error) {
        return console.log('something was wrong: ', error);
    }
    console.log(`Example app listening on port ${PORT}!`);
});