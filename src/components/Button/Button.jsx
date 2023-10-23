import PropTypes from 'prop-types'
import './Button.scss'

const Button = ({ type, children, handleClick }) => (
  <button className={`btn btn-${type}`} onClick={handleClick}>
    {children}
  </button>
)

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
}

export default Button
