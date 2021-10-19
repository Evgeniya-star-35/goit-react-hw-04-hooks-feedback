import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <li className={s.allButton}>
      {options.map((option, ind) => (
        <button
          className={s.button}
          value={option}
          key={ind}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </li>
  );
}

FeedbackOptions.defaultProps = {
  options: [],
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
