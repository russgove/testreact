/// aboutPage.js
"use strict";
var React = require("React");

var Home = React.createClass({
    render: function () {
        debugger;
        return (
            <div>
                <h1>About</h1>
                <p>react and d flux</p>
                <ul>
                    <li>React</li>
                    <li>eslint</li>
                    <li>browerify</li>
                    <li>offic ui fabrice</li>
                    <li>test</li>
                </ul>
            </div>
        )

    }
});
module.exports = Home;