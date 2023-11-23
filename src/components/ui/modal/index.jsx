import { useEffect } from 'react'
import ModalCSS from './Modal.module.css'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'

/**
 * Modal component for displaying book details.
 * @component
 * @param {Object} props - The properties of the component.
 * @param {boolean} props.show - Flag indicating whether the modal is visible.
 * @param {Object} props.book - The book object containing details to be displayed in the modal.
 * @param {function} props.onClose - Callback function to close the modal.
 * @example
 * // Example usage of Modal component
 * const MyComponent = () => {
 *   const sampleBook = {
 *     volumeInfo: {
 *       title: 'Sample Book',
 *       authors: ['Author One', 'Author Two'],
 *       publisher: 'Publisher XYZ',
 *       description: 'Lorem ipsum dolor sit am, consectetur adi elt.',
 *       imageLinks: {
 *         smallThumbnail: 'https://example.com/thumbnail.jpg',
 *       },
 *       previewLink: 'https://example.com/book-preview',
 *     },
 *   };
 *   const handleClose = () => {
 *     console.log('Modal closed');
 *   };
 *   return <Modal show={true} book={sampleBook} onClose={handleClose} />;
 * };
 */
const Modal = ({ show, book, onClose }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape' || event.key === 'Backspace') {
        onClose()
      }
    }
    // Add the event listener when the modal is shown
    if (show) {
      window.addEventListener('keydown', handleKeyPress)
    }

    // Remove the event listener when the modal is hidden or component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [show, onClose])

  if (!show) {
    return null
  }

  let thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail

  return ReactDom.createPortal(
    <>
      <div className={ModalCSS.overlay} />
      <div className={ModalCSS.modal}>
        <button className={ModalCSS.closeButton} onClick={onClose}></button>
        <div className={ModalCSS.contentBox}>
          <div className={ModalCSS.containerTop}>
            <img src={thumbnail} alt="cover image" />
            <div className={ModalCSS.containerInfo}>
              <h1>{book.volumeInfo.title}</h1>
              <h3>{book.volumeInfo.authors}</h3>
              <h4>{book.volumeInfo.publisher}</h4>
              <a
                href={book.volumeInfo.previewLink}
                target="_blank"
                rel="noreferrer"
              >
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className={ModalCSS.description}>
            {book.volumeInfo.description}
          </h4>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}

// PropTypes for type-checking
Modal.propTypes = {
  /**
   * Flag indicating whether the modal is visible.
   * @type {boolean}
   */
  show: PropTypes.bool.isRequired,

  /**
   * The book object containing details to be displayed in the modal.
   * @type {Object}
   */
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string).isRequired,
      publisher: PropTypes.string.isRequired,
      description: PropTypes.string,
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string,
      }),
      previewLink: PropTypes.string.isRequired,
    }),
  }).isRequired,

  /**
   * Callback function to close the modal.
   * @type {function}
   */
  onClose: PropTypes.func.isRequired,
}

export default Modal
