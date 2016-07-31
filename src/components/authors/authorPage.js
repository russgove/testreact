
"use strict";
var React = require("React");
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var AuthorApi = require("../../api/AuthorApi");

var Authors = React.createClass({
    getInitialState: function () {
        return {
            authors: []
        }
    },
    componentWillMount: function () {

        this.setState({ authors: AuthorApi.getAllAuthors() });
    },
    render: function () {
        debugger;
        var createAuthorRow = function (author) {

            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id} >{author.id}</a></td>
                    <td>author.lastName</td>
                </tr>
            )
        };
        return (
            <div>
                <h1>Authors</h1>
                <Link to='addAuthor'>Add an Author</Link>
                <table id='id' className='ms-Table'>
                    <thead className='ms-Table-row'>
                        <th className='ms-Table-rowCheck' ></th>
                        <th className='ms-Table-cell'>Header1</th>

                    </thead>
                    <tbody>
                        {this.state.authors.map(createAuthorRow, this) }
                    </tbody>
                </table>
            </div>
        );
    }
});
module.exports = Authors;