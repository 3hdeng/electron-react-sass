import React from 'react'; ///addons';
import moment from 'moment';

import Header from './header';
import Month from './month';

//const {CSSTransitionGroup} = React.addons;
var CSSTransitionGroup = require('react-addons-css-transition-group');

export default class Calendar extends React.Component {
  render() {
    return (
      <section className="sd-calendar">
        <Header {...this.props} />
        <CSSTransitionGroup transitionName="month" component="div" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <Month {...this.props} key={this.props.month}/>
        </CSSTransitionGroup>
      </section>
    )
  }
}
