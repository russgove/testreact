'use strict';
/// app.js
var React = require('React');

var Header = require('./common/Header')
global.$ = global.jQuery = require('jquery');

var App = React.createClass({

    render: function () {
        debugger;

        return (
            <div>
                <Header />
                <div >
                    {this.props.children}
                </div>
            </div>
        )
    }
});
module.exports = App;