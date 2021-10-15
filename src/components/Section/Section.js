import s from './Section.module.css';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <div>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
