import { Component } from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export default class Statistics extends Component {
  static defaultProps = {
    state: { good: 0, neutral: 0, bad: 0 },
    total: 0,
    positivePercentage: 0,
  };
  static propTypes = {
    state: PropTypes.objectOf(PropTypes.number),
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  render() {
    const { good, neutral, bad } = this.props.state;
    const { total, positivePercentage } = this.props;
    return (
      <ul className={s.list}>
        <li className={s.item}>Good: {good}</li>
        <li className={s.item}>Neutral: {neutral}</li>
        <li className={s.item}>Bad: {bad}</li>
        <li className={s.item}>Total: {total}</li>
        <li className={s.item}>Positive feedback: {positivePercentage} %</li>
      </ul>
    );
  }
}
