var React = require('react');
var Navbar = require('./Navbar');
var URL = require('./URL');
var QRCode = require('./QRCode');

var App = React.createClass({
	getInitialState() {
		return {
			url: ''
		};
	},
	handleClick(url) {
		this.setState({
			url: 'http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + url
		});
	},
  render() {
    return (
    <div>
      <Navbar/>
      <div className="container">
        <URL handleURLSubmit={this.handleClick}/>
        <QRCode url={this.state.url}/>
      </div>
    </div>
    );
  }
});

module.exports = App;
