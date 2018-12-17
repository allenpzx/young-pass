import csshook from 'css-modules-require-hook/preset';
import assethook from 'asset-require-hook';
import React from 'react';
import {renderToString, renderToNodeStream} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from '../src/App.js';
// import { htmlTemplate } from './html-template.js';
import { store } from '../src/redux/index.js';
import { Provider } from 'react-redux';

assethook({
    extensions: ['png', 'jpg', 'ico', 'svg']
});

const express = require('express');
const app = express();
const PORT = 9096;
const buildPath = require('../build/asset-manifest.json');


app.use(express.static('build'));
app.get('*', (req, res, next) => {

    if (req.url.startsWith('/user/') || req.url.startsWith('/static/')) {
        return next()
    }

    const context = {};
    const html = renderToNodeStream(
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

        html.pipe(res, { end: false })
        html.on('end', () => {
            res.write(`
                </div>
                <script src="/${buildPath['main.js']}"></script>
                </body>
            </html>
            `)
            res.end()
        });

        // res.send(htmlTemplate('YoungPass学生特权卡', html, buildPath));
    }
})

app.listen(PORT, (error) => {
    if (error) {
        return console.log('something was wrong: ', error);
    }
    console.log(`Example app listening on port ${PORT}!`);
});