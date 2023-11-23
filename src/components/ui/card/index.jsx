import { useState } from 'react'
import Modal from '../modal'
import CardCSS from './Card.module.css'
import PropTypes from 'prop-types'

/**
 * React functional component representing a card displaying book information.
 * @component
 * @param {object} props - The properties of the component.
 * @param {object} props.book - The book object containing information to be displayed on the card.
 * @returns {JSX.Element|null} The rendered Card component or null if thumbnail or amount is undefined.
 *
 * Example of using the Card component to display book information.
 * @example
 * // Example book object
 * const book = {
 *   volumeInfo: {
 *     title: 'Example Book Title',
 *     imageLinks: {
 *       smallThumbnail: 'https://example.com/thumbnail.jpg',
 *     },
 *   },
 *   saleInfo: {
 *     listPrice: {
 *       amount: 19.99,
 *       currencyCode: 'USD',
 *     },
 *   },
 * };
 *
 * // Usage of the Card component
 * <Card book={book} />
 *
 * @example
 * // Example book object with missing thumbnail or amount
 * const bookWithMissingInfo = {
 *   volumeInfo: {
 *     title: 'Another Book Title',
 *     // imageLinks and listPrice are missing
 *   },
 *   // saleInfo is missing
 * };
 *
 * // Usage of the Card component with missing information (renders null)
 * <Card book={bookWithMissingInfo} />
 */

const Card = ({ book }) => {
  const [show, setShow] = useState(false)

  /**
   * Handles key press events, shows the modal when the Enter key is pressed.
   * @param {object} event - The key press event object.
   * @returns {void}
   */
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setShow(true)
    }
  }

  // without the '&&' the code breaks
  let thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
  let amount = book.saleInfo.listPrice && book.saleInfo.listPrice.amount
  let currency = book.saleInfo.listPrice && book.saleInfo.listPrice.currencyCode

  //Add some currencies, could add more
  switch (currency) {
    case 'EUR':
      currency = '€'
      break
    default:
      currency = '$'
  }

  if (thumbnail != undefined && amount != undefined) {
    return (
      <>
        <div
          className={CardCSS.card}
          role="card"
          tabIndex="0"
          onClick={() => {
            setShow(true)
          }}
          onKeyPress={handleKeyPress}
        >
          <div className={CardCSS.thumbnail}>
            <img src={thumbnail} alt="" />
          </div>
          <div className={CardCSS.infoContainer}>
            <h3 className={CardCSS.info_title}>{book.volumeInfo.title}</h3>
            <p className={CardCSS.info_price}>
              {currency} {amount}
            </p>
          </div>
        </div>
        <Modal show={show} book={book} onClose={() => setShow(false)} />
      </>
    )
  }
  // Return null if thumbnail or amount is undefined
  return null
}

// PropTypes for the Card component
Card.propTypes = {
  /**
   * The book object containing information to be displayed on the card.
   */
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string,
      }),
      title: PropTypes.string,
    }),
    saleInfo: PropTypes.shape({
      listPrice: PropTypes.shape({
        amount: PropTypes.number,
        currencyCode: PropTypes.string,
      }),
    }),
  }).isRequired,
}

export default Card
