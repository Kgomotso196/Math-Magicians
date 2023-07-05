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
const Button = ({ value }) => (
  <button type="submit" className={`${getStyles(value)} button`}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
