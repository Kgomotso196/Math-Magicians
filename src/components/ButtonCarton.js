import PropTypes from 'prop-types';

const ButtonCarton = ({ children }) => (
  <div className="buttonCarton">
    {children}
  </div>
);

ButtonCarton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonCarton;
