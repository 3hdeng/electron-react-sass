//import React from 'react';
//import Datepicker from './components/datepicker';

const React = require('react');
const ReactDOM = require('react-dom');
var Datepicker= require('./components/datepicker');

require('./stylesheets/main.scss');

ReactDOM.render(<Datepicker />, document.querySelector('.my-datepicker-component'));
