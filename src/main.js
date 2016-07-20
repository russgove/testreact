$ = jQuery = require("jquery");
var React=require('React');
var ReactDOM=require('React-dom');

var Home=require('./components/HomePage')
var About=require('./components/About/AboutPage')
var Header=require('./components/common/Header')

var App = React.createClass({

    render:function(){
        var Child
        switch(this.props.route){
            case 'about': Child=About;break;
            default:Child=Home;break;
        }
        return (
            <div>
            <Header />
            <Child />
            </div>
        )
    }
});

function render(){

   var route= window.location.hash.substr(1);
    ReactDOM.render(<App route={route} /> , document.getElementById('app'))
}

window.addEventListener('hashchange', render);
render();
