'use strict';
/// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var routes = require('./routes');
var createHashHistory = require('history/lib/createHashHistory');

var history = createHashHistory({
    queryKey: false
});

debugger;
ReactDOM.render(<Router history={history} routes={routes} />,
    document.getElementById('app'));

