import { Link } from 'react-router-dom'
import ConfigLinkCSS from './ConfigLink.module.css'
import PropTypes from 'prop-types'

/**
 * React functional component representing a customized Link component with additional styling.
 * @component
 * @param {object} props - The properties of the component.
 * @param {string} props.to - The target URL for the link.
 * @param {React.ReactNode} props.children - The content to be rendered inside the link.
 * @returns {JSX.Element} The rendered ConfigLink component.
 */

const ConfigLink = ({ to, children }) => {
  /**
   * JSX representing the rendered ConfigLink component.
   * @returns {JSX.Element} The rendered ConfigLink component.
   */
  return (
    <>
      <Link to={to} className={ConfigLinkCSS.reset_link_outline}>
        {children}
      </Link>
    </>
  )
}

// PropTypes for the ConfigLink component
ConfigLink.propTypes = {
  /**
   * The target URL for the link.
   */
  to: PropTypes.string.isRequired,

  /**
   * The content to be rendered inside the link.
   */
  children: PropTypes.node.isRequired,
}

export default ConfigLink
