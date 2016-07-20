

"use strict";
var React = require("React");
var Header = React.createClass({
    render: function () {
        return (
            <div id='id' className='ms-NavBar'>
                <div className='ms-NavBar-openMenu js-openMenu'>
                    <i className='ms-Icon ms-Icon--menu'></i>
                </div>
                <div className='ms-Overlay'></div>
                <ul className='ms-NavBar-items'>

                    <li className='ms-NavBar-item'>
                        <a href='/' className='ms-NavBar-link'>Home</a>
                    </li>
                    <li className='ms-NavBar-item'>
                        <a href='/#about' className='ms-NavBar-link'>About</a>
                    </li>

                    <li className='ms-NavBar-item ms-NavBar-item--right'>
                        <a className='ms-NavBar-link'><i className='ms-Icon ms-Icon--upload'></i>Text</a>
                    </li>
                </ul>
            </div>
           
        );
    },
    
    componentDidMount: function () {
        debugger;
        $(document).ready(function () {
            if ($.fn.NavBar) {
                $('.ms-NavBar').NavBar();
            }
        });
    }
});
module.exports = Header;