import IconBoxCSS from './IconBox.module.css'
import PropTypes from 'prop-types'

/**
 * React functional component representing an icon box.
 * @component
 * @param {object} props - The properties of the component.
 * @param {string} props.type - The type of icon box, either 'home' or 'github'.
 * @returns {JSX.Element} The rendered IconBox component.
 * 
* Example of using the IconBox component to display icons.
 *
 * @example
 * // Example usage of IconBox with 'home' icon:
 * <IconBox type="home" />
 *
 * @example
 * // Example usage of IconBox with 'github' icon:
 * <IconBox type="github" />
 *
 * @example
 * // Example usage of IconBox with an invalid type (will render default icon):
 * <IconBox type="invalidType" />
 */

const IconBox = ({ type }) => {
  /**
   * JSX representing the rendered IconBox component.
   * @returns {JSX.Element} The rendered IconBox component.
   */
  return (
    <>
      <div
        className={`${IconBoxCSS.iconBox} custom-element-cursor`}
        role="icon"
        tabIndex="0"
      >
        <img
          src={`./assets/icons/${
            type === 'home' ? 'icon_home' : 'icon_github'
          }.png`}
        ></img>
      </div>
    </>
  )
}

// PropTypes for the IconBox component
IconBox.propTypes = {
  /**
   * The type of icon box, either 'home' or 'github'.
   */
  type: PropTypes.oneOf(['home', 'github']).isRequired,
};

export default IconBox
