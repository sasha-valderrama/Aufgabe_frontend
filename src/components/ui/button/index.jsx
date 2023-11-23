import PropTypes from 'prop-types'
import ButtonCSS from './Button.module.css'
import ConfigLink from '../configLink'

/**
 * Functional component representing a button with a link.
 * @component
 * @param {object} props - The properties of the component.
 * @param {string} props.text - The text to be displayed on the button.
 * @param {string} props.to - The URL to which the button links.
 * @returns {JSX.Element} The rendered Button component.
 * 
 * Example of using the Button component to create a navigational button.
 *
 * @example
 * // Example usage of Button component with text 'Home' linking to '/'
 * <Button text="Home" to="/" />
 *
 * @example
 * // Example usage of Button component with text 'About' linking to '/about'
 * <Button text="About" to="/about" />
 *
 */
const Button = ({ text, to }) => {
  return (
    <>
      <ConfigLink to={to}>
        <button className={ButtonCSS.button}>{text}</button>
      </ConfigLink>
    </>
  )
}

Button.propTypes = {
  /**
   * The text to be displayed on the button.
   */
  text: PropTypes.string.isRequired,

  /**
   * The URL to which the button links.
   */
  to: PropTypes.string.isRequired,
}

export default Button
