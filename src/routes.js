'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;
debugger;
var App = require('./components/app');
var HomePage = require('./components/homePage');
var AuthorPage = require('./components/authors/authorPage');

var ManageAuthorsPage = require('./components/authors/manageAuthorsPage');
//var ManageAuthorPage = require('./components/authors/manageAuthorPage');
var AboutPage = require('./components/about/aboutPage');
var NotFoundPage = require('./components/notFoundPage');
debugger;
var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="authors" component={AuthorPage} />
        <Route path="addAuthor"  component={ManageAuthorsPage} />
        <Route path="about" component={AboutPage} />

        <Route path="*" component={NotFoundPage}/>
    </Route>
)

module.exports = routes;