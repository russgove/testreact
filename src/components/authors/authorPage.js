
"use strict";
var React = require("React");
var AuthorApi = require("../../api/AuthorApi");
var Authors = React.createClass({
    render: function () {
        return (
            <div>
                <div id='id' className='ms-Table'>
                    <div className='ms-Table-row'>
                        <span className='ms-Table-rowCheck' is-selectable></span>
                        <span className='ms-Table-cell'>Header1</span>
                        <span className='ms-Table-cell'>Header 2 2</span>
                        <span className='ms-Table-cell'>Header 3 3</span>
                    </div>
                    <div className='ms-Table-row is-selected '>
                        <span className='ms-Table-rowCheck'></span>
                        <span className='ms-Table-cell'>Col 1</span>
                        <span className='ms-Table-cell'>Col 2</span>
                        <span className='ms-Table-cell'>Col 3</span>
                    </div>
                     <div className='ms-Table-row'>
                        <span className='ms-Table-rowCheck'></span>
                        <span className='ms-Table-cell'>Col 1</span>
                        <span className='ms-Table-cell'>Col 2</span>
                        <span className='ms-Table-cell'>Col 3</span>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Authors;