var React = require('react');
var ReactDOM = require('react-dom');

var URL = React.createClass({
  handleClick(e) {
    e.preventDefault();
    var url = ReactDOM.findDOMNode(this.refs.url).value;
    this.props.handleURLSubmit(url);
    // ReactDOM.findDOMNode(this.refs.url).value = '';
  },
  render() {
    return (
      <form onSubmit={this.handleClick} role="form" className="col-sm-6">
        <div className="form-group">
          <label>URL</label>
          <input className="form-control" type="url" placeholder="Enter url..." ref="url"/>
        </div>
        <button type="submit" className="btn btn-default">Generate</button>
      </form>
    );
  }
});

module.exports = URL;
