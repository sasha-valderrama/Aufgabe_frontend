import PropTypes from 'prop-types'
import MessageBoxCSS from './MessageBox.module.css'

/**
 * React functional component representing a message box with optional accentuated text.
 * @component
 * @param {object} props - The properties of the component.
 * @param {string} props.normalText - The main text content of the message box.
 * @param {React.ReactNode} props.children - Additional content to be included in the message box.
 * @returns {JSX.Element} The rendered MessageBox component.
 *
 * @example
 * // Example usage of MessageBox component with accentuated text:
 * <MessageBox normalText="This is an *important* message.">
 *   <p>Additional content goes here.</p>
 * </MessageBox>
 *
 * @example
 * // Example usage of MessageBox component without accentuated text:
 * <MessageBox normalText="This is a simple message.">
 *   <p>Additional content goes here.</p>
 * </MessageBox>
 */

const MessageBox = ({ normalText, children }) => {
  /**
   * Processes the text and adds the class accentText to words finished with '*'.
   * @param {string} text - The text to be processed.
   * @returns {Array<JSX.Element>} An array of JSX elements representing the processed text.
   */
  const processText = (text) => {
    const elements = []

    text.split(/\s+/).forEach((word, index) => {
      if (word.endsWith('*')) {
        const processedWord = word.slice(0, -1) // Remove '*'
        elements.push(
          <span key={index} className={MessageBoxCSS.accentText}>
            {processedWord}
          </span>
        )
      } else {
        elements.push(word + ' ') // Add space after each word
      }
    })

    return elements
  }

  /**
   * JSX representing the rendered MessageBox component.
   * @returns {JSX.Element} The rendered MessageBox component.
   */
  return (
    <>
      <div className={MessageBoxCSS.container}>
        <p className={MessageBoxCSS.MessageBoxText}>
          {processText(normalText)}
        </p>
        {children}
      </div>
    </>
  )
}

// PropTypes for the MessageBox component
MessageBox.propTypes = {
  /**
   * The main text content of the message box.
   */
  normalText: PropTypes.string.isRequired,

  /**
   * Additional content to be included in the message box.
   */
  children: PropTypes.node,
}

export default MessageBox
