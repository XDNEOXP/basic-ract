import './Button.css'
import PropTypes from 'prop-types'

const Button = ({children, handelClick, added = () => {}, ...props}) => (
     <button onClick={handelClick} className={added} {...props}>{children}</button>
    )

Button.propTypes = {
    handelClick: PropTypes.func.isRequired,
    children: PropTypes.element
}

export default Button