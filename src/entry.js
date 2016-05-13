// entry.js
var React = require('react');
var ReactDOM = require('react-dom');

//import React from 'react';
//import ReactDOM from 'react-dom';

var App = React.createClass({
      render: function() {
          return <h2>Hello, webpack hot reload, 333 !</h2>;
                }
});

ReactDOM.render(<App/>, document.getElementById('react-root'));
