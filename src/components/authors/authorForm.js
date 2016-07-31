
"use strict";
var React = require("React");

var AuthorForm = React.createClass({

    render: function () {

        return (
            <form>
                <h1>AuthorForm</h1>
                <label htmlFor='firstName'>First Name</label>
                <input type='text'
                    name='firstName'
                    className='form-control'
                    PLaceHolder='fn'
                    ref='firstName'
                    value=''/>
            </form>

        );
    }
});
module.exports = AuthorForm;