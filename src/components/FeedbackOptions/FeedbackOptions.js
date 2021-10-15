import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.allButton}>
      {options.map((option, ind) => (
        <button
          className={s.button}
          value={option}
          key={ind}
          type="button"
          onClick={e => onLeaveFeedback(e)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.defaultProps = {
  options: [],
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
