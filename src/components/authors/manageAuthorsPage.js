
"use strict";
var React = require("React");
var AuthorForm = require('./AuthorForm');
var AuthorApi = require('../../api/AuthorApi');
var toastr = require('toastr');


var ManageAuthorsPage = React.createClass({

    getInitialState: function () {
        return {
            author: {
                id: '',
                firstName: '',
                lastName: ''

            }
        }
    },
    setAuthorState: function (event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({ author: this.state.author })
    },
    saveAuthor: function (event) {
        debugger;
        event.preventDefault();
        AuthorApi.saveAuthor(this.state.author);
        toastr.success('Author saved!');

        this.props.history.push('authors');
    },
    render: function () {
        debugger;

        return (

            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
                />

        );
    }
});
module.exports = ManageAuthorsPage;