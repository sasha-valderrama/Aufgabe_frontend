import LetterBoxCSS from './LetterBox.module.css'
import PropTypes from 'prop-types'

/**
 * React functional component representing a container for displaying individual letter boxes.
 * @component
 * @param {object} props - The properties of the component.
 * @param {string} props.text - The text to be displayed in the letter boxes.
 * @returns {JSX.Element} The rendered LetterBox component.
 *
 * @example
 * // Example usage of LetterBox component with text 'Hello World':
 * <LetterBox text="Hello World" />
 *
 * @example
 * // Example usage of LetterBox component with an empty string:
 * <LetterBox text="" />
 */

const LetterBox = ({ text }) => {
  /**
   * Array of JSX elements representing individual letter boxes.
   * @type {Array<JSX.Element>}
   */
  const letterBoxes = Array.from(text).map((letter, index) => (
    <div
      key={index}
      className={
        letter === ' ' ? LetterBoxCSS.spaceBox : LetterBoxCSS.letterBox
      }
    >
      {letter}
    </div>
  ))

  /**
   * JSX representing the rendered LetterBox component.
   * @returns {JSX.Element} The rendered LetterBox component.
   */
  return (
    <>
      <div className={LetterBoxCSS.container}>{letterBoxes}</div>
    </>
  )
}

// PropTypes for the LetterBox component
LetterBox.propTypes = {
  /**
   * The text to be displayed in the letter boxes.
   */
  text: PropTypes.string.isRequired,
}

export default LetterBox
