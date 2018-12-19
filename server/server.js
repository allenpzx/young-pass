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
const PORT = 9090;
const cheerio = require('cheerio');

// const AuthChecker = require('auth-checker.js');
// app.use(AuthChecker());

app.use(express.static(path.join(__dirname, '../build')));
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
        // const finalState = store.getState();
        const template = fs.readFileSync(path.resolve(__dirname, '../build/index.html'), 'utf8');
        const $ = cheerio.load(template);
        $('div#root').html(rootElement);
        $('head').append(`<script>window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}</script>`);
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