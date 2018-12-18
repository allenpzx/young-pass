import csshook from 'css-modules-require-hook/preset';
import assethook from 'asset-require-hook';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from '../src/App.js';
// import { htmlTemplate } from './html-template.js';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {reducers} from '../src/redux/index.js';

const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 9093;

assethook({
    extensions: ['png', 'jpg', 'ico', 'svg'],
    name: '[name].[hash:8].[ext]',
    publicPath: '/static/media/',
});
// const buildPath = require(path.resolve(__dirname, '../build/asset-manifest.json'));

app.use(express.static(path.join(__dirname, '../build')));

// SPA will do
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../build', 'index.html'));
// });

app.get('/*', (req, res) => {

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
        // res.send(htmlTemplate('YoungPass学生特权卡', rootElement, buildPath, finalState));

        const template = fs.readFileSync(path.resolve(__dirname, '../build/index.html'), 'utf8');
        const afterInjectDom = template.replace('<div id="root"></div>', `<div id="root">${rootElement}</div>`);
        // const injectPoint = template.replace('<div id="root"></div>', rootElement).indexOf("</body>")
        // const page = afterInjectDom.slice(0, injectPoint) + `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(finalState).replace(/</g, '\\u003c')}</script>` + afterInjectDom.slice(injectPoint);

        // res.send(page);
        res.send(afterInjectDom);
    }
})

app.listen(PORT, (error) => {
    if (error) {
        return console.log('something was wrong: ', error);
    }
    console.log(`Example app listening on port ${PORT}!`);
});