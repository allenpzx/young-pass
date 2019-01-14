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
const PORT = process.env.PORT || 9090;
const cheerio = require('cheerio');
const dotenv = require('dotenv');
dotenv.config();
app
.use(express.static(path.join(__dirname, '../build')))
.get('/*', function (req, res, next){

    const store = createStore(reducers);
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
        // const finalState = store.getState();
        const template = fs.readFileSync(path.resolve(__dirname, '../build/index.html'), 'utf8');
        const $ = cheerio.load(template);
        $('div#root').html(rootElement);
        $('head').append(`<script>window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}</script>`);
        const finalPage = $.html();
        res.send(finalPage);
    }
})
.listen(PORT, (error) => {
    if (error) {
        return console.log('something was wrong: ', error);
    }
    console.log(`Example app listening on port ${PORT}!`);
});