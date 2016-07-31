
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
                <a className='ms-Button ms-Button-Primary' href='/#addAuthor'>
                <span className='ms-Button-Label'>
                          <i className="ms-Icon ms-Icon--plus"></i> <span className="ms-font-m">NEW!</span>
                </span>
                </a>
                <br />
              
                <table id='id' className='ms-Table'>
                    <thead className='ms-Table-row'>
                        
                        <th className='ms-Table-cell'>ID</th>
   <th className='ms-Table-cell'>Name</th>
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