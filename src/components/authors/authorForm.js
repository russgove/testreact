
"use strict";
var React = require("React");
var Input = require('../common/textInput');
var AuthorForm = React.createClass({

    render: function () {

        return (
            <form>
                <h1>AuthorForm</h1>

                <Input
                    name='firstName'
                    placeholder='First Name'
                    label='First Name'
                    onChange={this.props.onChange}
                    value={this.props.author.firstName}/>
                <br/>
                <Input
                    name='lastName'
                    placeholder='Last Mame'
                    label='Last Mame'
                    onChange={this.props.onChange}
                    value={this.props.author.lastName}/>
                <br/>
                <input type='submit' value='save' className='ms-Button ms-Button-Primary' onClick={this.props.onSave} />
            </form>

        );
    }
});
module.exports = AuthorForm;