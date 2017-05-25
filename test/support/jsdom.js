// From: http://jaketrent.com/post/testing-react-with-jsdom/
const {JSDOM} = require("jsdom");
const jsdom = new JSDOM("<!doctype html><html><body></body></html>", {url: "http://localhost"});
const {window} = jsdom;

global.document = window.document;
global.window = window;
propagateToGlobal(window);

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal(window) {
    for (var key in window) {
        if (!window.hasOwnProperty(key) || key in global) {
            continue;
        }

        global[key] = window[key];
    }
}