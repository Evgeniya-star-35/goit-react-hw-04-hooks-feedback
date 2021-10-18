import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ total, positivePercentage, state }) {
  return (
    <ul className={s.list}>
      <li className={s.item}>Good: {state.good}</li>
      <li className={s.item}>Neutral: {state.neutral}</li>
      <li className={s.item}>Bad: {state.bad}</li>
      <li className={s.item}>Total: {total}</li>
      <li className={s.item}>Positive feedback: {positivePercentage} %</li>
    </ul>
  );
}

Statistics.defaultProps = {
  state: { good: 0, neutral: 0, bad: 0 },
  total: 0,
  positivePercentage: 0,
};
Statistics.propTypes = {
  state: PropTypes.objectOf(PropTypes.number),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
