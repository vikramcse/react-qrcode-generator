var React = require('react');
var Navbar = require('./Navbar');
var URL = require('./URL');
var QRCode = require('./QRCode');

var App = React.createClass({
  render() {
    return (
    	<div>
    		<Navbar/>
    		<div className="container">
    			<URL/>
    			<QRCode/>
    		</div>
    	</div>
    );
  }
});

module.exports = App;