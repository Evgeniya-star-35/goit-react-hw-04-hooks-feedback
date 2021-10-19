import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({
  total,
  positivePercentage,
  good,
  neutral,
  bad,
}) {
  return (
    <ul className={s.list}>
      <li className={s.item}>Good: {good}</li>
      <li className={s.item}>Neutral: {neutral}</li>
      <li className={s.item}>Bad: {bad}</li>
      <li className={s.item}>Total: {total(good, neutral, bad)}</li>
      <li className={s.item}>
        Positive feedback: {positivePercentage(good, neutral, bad)} %
      </li>
    </ul>
  );
}

Statistics.defaultProps = {
  // total: 0,
  // positivePercentage: 0,
  good: 0,
  neutral: 0,
  bad: 0,
};
Statistics.propTypes = {
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
