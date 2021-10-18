import s from './Notification.module.css';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <h2 className={s.notification}>{message}</h2>;
}

Notification.defaultProps = {
  message: '',
};
Notification.propTypes = {
  Message: PropTypes.string,
};
