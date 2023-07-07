import PropTypes from 'prop-types';

const getStyles = (btn) => {
  const className = {
    0: 'bigbtn',
    x: 'operator',
    '-': 'operator',
    '+': 'operator',
    '÷': 'operator',
    '=': 'operator',

  };
  return className[btn];
};
const Button = ({ value, onClick }) => (
  <button onClick={onClick} type="submit" className={`${getStyles(value)} button`}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
