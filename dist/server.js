"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("../src/App.js"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _index = require("../src/redux/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path');

var fs = require('fs');

var express = require('express');

var app = express();
var PORT = 3090;

var cheerio = require('cheerio');

app.use(express.static(path.join(__dirname, '../build')));
app.get('/*', function (req, res) {
  var store = (0, _redux.createStore)(_index.reducers);
  store.dispatch({
    type: 'ADD'
  });
  store.dispatch({
    type: 'ADD'
  });
  var context = {};
  var rootElement = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, _react.default.createElement(_reactRouterDom.StaticRouter, {
    location: req.url,
    context: context
  }, _react.default.createElement(_App.default, null))));

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    // const finalState = store.getState();
    var template = fs.readFileSync(path.resolve(__dirname, '../build/index.html'), 'utf8');
    var $ = cheerio.load(template);
    $('div#root').html(rootElement);
    $('head').append("<script>window.__PRELOADED_STATE__ = ".concat(JSON.stringify(store.getState()).replace(/</g, "\\u003c"), "</script>"));
    var finalPage = $.html();
    res.send(finalPage);
  }
}); // SPA will do
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../build', 'index.html'));
// });

app.listen(PORT, function (error) {
  if (error) {
    return console.log('something was wrong: ', error);
  }

  console.log("Example app listening on port ".concat(PORT, "!"));
});