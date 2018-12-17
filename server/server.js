import csshook from 'css-modules-require-hook/preset';
import assethook from 'asset-require-hook';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from '../src/App.js';
import { htmlTemplate } from './html-template.js';
import { store } from '../src/redux/index.js';
import { Provider } from 'react-redux';

assethook({
    extensions: ['png', 'jpg', 'ico', 'svg']
});
const path = require('path');
const express = require('express');
const app = express();
const PORT = 9093;

app.use(express.static('build'));
app.get('*', (req, res, next) => {

    console.log('req.url', req.url.startsWith('/user/'));

    const context = {};
    const html = renderToString(
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
        res.send(htmlTemplate('YoungPass学生特权卡', html));
    }
})

app.listen(PORT, (error) => {
    if (error) {
        return console.log('something was wrong: ', error);
    }
    console.log(`Example app listening on port ${PORT}!`);
});