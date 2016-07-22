
"use strict";
var React = require("React");
var AuthorApi = require("../../api/AuthorApi");
var Authors = React.createClass({
    getInitialState:function(){
        return{
            authors:[]
        }
    },
    componentWillMount:function(){
        debugger;
        this.setState({authors:AuthorApi.getAllAuthors()});
    },
    render: function () {
        var createAuthorRow=function(author){

            return(
                <tr key={author.id}>
                <td><a href={"/#authors/"+author.id} >{author.id}</a></td>
                <td>author.lastName</td>
                </tr>
            )
        };
        return (
            <div>
                <table id='id' className='ms-Table'>
                    <thead className='ms-Table-row'>
                        <th className='ms-Table-rowCheck' ></th>
                        <th className='ms-Table-cell'>Header1</th>
                        
                    </thead>
                 <tbody>
                 {this.state.authors.map(createAuthorRow, this)}
                 </tbody>
                </table>
            </div>
        );
    }
});
module.exports = Authors;