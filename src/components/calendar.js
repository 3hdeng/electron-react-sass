//import React from 'react/addons';
//import moment from 'moment';

//import Header from './header';
//import Month from './month';

//const {CSSTransitionGroup} = React.addons;
const moment= require('moment');
var Header= require('./header');
var Month= require('./month');

const React= require('react');
const classnames= require('classnames');
const CSSTransitionGroup = React.addons;

module.exports= class Calendar extends React.Component {
  render() {
    return (
      <section className="sd-calendar">
        <Header {...this.props} />
        <CSSTransitionGroup transitionName="month" component="div">
          <Month {...this.props} key={this.props.month}/>
        </CSSTransitionGroup>
      </section>
    )
  }
}
