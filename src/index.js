import React from 'react';
import ReactDOM from 'react-dom';
import Datepicker from './components/datepicker';

require('./stylesheets/main.scss');

ReactDOM.render(<Datepicker />, document.querySelector('.my-datepicker-component'));
