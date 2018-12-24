"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlTemplate = void 0;

var htmlTemplate = function htmlTemplate(title, rootElement, buildPath, payload) {
  return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n        <meta name=\"theme-color\" content=\"#000000\">\n        <title>".concat(title, "</title>\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"").concat(buildPath['main.css'], "\">\n        <meta name=\"keywords\" content=\"YoungPass \u5B66\u751F\u7279\u6743\u5361\">\n        <meta name=\"description\" content=\"YoungPass \u5B66\u751F\u7279\u6743\u5361\">\n        <meta name=\"author\" content=\"YoungPass \u5B66\u751F\u7279\u6743\u5361\">\n    </head>\n    <body>\n        <noscript>\n            You need to enable JavaScript to run this app.\n        </noscript>\n        <div id=\"root\">").concat(rootElement, "</div>\n        <script src=\"").concat(buildPath['main.js'], "\"></script>\n        <script>window.__PRELOADED_STATE__ = ").concat(JSON.stringify(payload).replace(/</g, "\\u003c"), "</script>\n    </body>\n    </html>\n");
};

exports.htmlTemplate = htmlTemplate;