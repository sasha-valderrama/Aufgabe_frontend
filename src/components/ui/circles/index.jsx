import CirclesCSS from './Circles.module.css'
import PropTypes from 'prop-types'

/**
 * React functional component representing a set of circles.
 * @component
 * @param {object} props - The properties of the component.
 * @param {number} props.number - The number of circles to be displayed.
 * @returns {JSX.Element} The rendered Circles component.
 *
 * @example
 * // Example usage of Circles component with 5 circles:
 * <Circles number={5} />
 *
 * @example
 * // Example usage of Circles component with 3 circles:
 * <Circles number={3} />
 */

const Circles = ({ number }) => {
  /**
   * Generates an array of circle elements based on the specified number.
   * @type {Array<JSX.Element>}
   */
  const circles = Array.from({ length: number }, (_, index) => (
    <div key={index} className={CirclesCSS.circle}></div>
  ))

  /**
   * JSX representing the rendered Circles component.
   * @returns {JSX.Element} The rendered Circles component.
   */
  return (
    <>
      <div className={CirclesCSS.circles}>{circles}</div>
    </>
  )
}

// PropTypes for the Circles component
Circles.propTypes = {
  /**
   * The number of circles to be displayed.
   */
  number: PropTypes.number.isRequired,
}

export default Circles
