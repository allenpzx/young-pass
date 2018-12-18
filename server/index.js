import csshook from 'css-modules-require-hook/preset';
import assethook from 'asset-require-hook';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from '../src/App.js';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {reducers} from '../src/redux/index.js';

const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 9093;
const cheerio = require('cheerio');

assethook({
    extensions: ['png', 'jpg', 'ico', 'svg'],
    name: '[name].[hash:8].[ext]',
    publicPath: '/static/media/',
});

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
        const template = fs.readFileSync(path.resolve(__dirname, '../build/index.html'), 'utf8');
        const $ = cheerio.load(template);
        $('div#root').html(rootElement);
        $('body').append(`<script>window.__PRELOADED_STATE__ = ${JSON.stringify(finalState).replace(/</g, '\\u003c')}</script>`);
        const finalPage = $.html();
        res.send(finalPage);
    }
})

app.listen(PORT, (error) => {
    if (error) {
        return console.log('something was wrong: ', error);
    }
    console.log(`Example app listening on port ${PORT}!`);
});