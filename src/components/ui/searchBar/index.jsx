import SearchBarCSS from './SearchBar.module.css'
import PropTypes from 'prop-types'

/**
 * SearchBar component for book search.
 * @component
 * @param {Object} props - The properties of the component.
 * @param {string} props.value - The current value of the input field.
 * @param {function} props.handleOnChange - The callback function triggered on input change.
 * @example
 * // Example usage of SearchBar component
 * const MyComponent = () => {
 *   const handleChange = (event) => {
 *     console.log('Input changed:', event.target.value);
 *   };
 *   return <SearchBar value="Harry Potter" handleOnChange={handleChange} />;
 * };
 */
const SearchBar = ({ value, handleOnChange }) => {
  return (
    <>
      <div className={SearchBarCSS.searchBar}>
        <input
          type="text"
          placeholder="Enter you Book Name"
          value={value}
          onChange={handleOnChange}
        />
        <div className={SearchBarCSS.icon}></div>
      </div>
    </>
  )
}

// PropTypes for type-checking
SearchBar.propTypes = {
  /**
   * The current value of the input field.
   * @type {string}
   */
  value: PropTypes.string.isRequired,

  /**
   * The callback function triggered on input change.
   * @type {function}
   */
  handleOnChange: PropTypes.func.isRequired,
};


export default SearchBar
