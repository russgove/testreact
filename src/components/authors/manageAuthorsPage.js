
"use strict";
var React = require("React");
var AutorForm = require('./AuthorForm');

var ManageAuthorsPage = React.createClass({

    render: function () {
        debugger;

        return (
            <div>
                <h1>Manage Author</h1>
                <AutorForm />
            </div>
        );
    }
});
module.exports = ManageAuthorsPage;