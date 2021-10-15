import s from './Notification.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notification extends Component {
  static defaultProps = {
    message: '',
  };
  static propTypes = {
    Message: PropTypes.string,
  };
  render() {
    return <h2 className={s.notification}>{this.props.message}</h2>;
  }
}
