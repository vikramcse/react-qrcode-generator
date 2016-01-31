var React = require('react');

var QRCode = React.createClass({
  render() {
    return (
	    <div createName="row">
	    	<img src={this.props.url}/>
	    </div>
    );
  }
});

module.exports = QRCode;
