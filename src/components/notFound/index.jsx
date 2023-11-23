import Button from '../ui/button'
import LetterBox from '../ui/letterBox'
import MessageBox from '../ui/messageBox'

/**
 * NotFound Component
 *
 * The `NotFound` component is responsible for rendering a 404 error message
 * with an option to navigate back to the home page.
 */

const NotFound = () => {
  /**
   * Render Function
   *
   * Renders the NotFound component with a 404 error message and a button to
   * navigate back to the home page.
   *
   * @returns {JSX.Element} The rendered NotFound component.
   */
  return (
    <>
      <div>
        <LetterBox text="not found" />
        <MessageBox normalText="Error_404:* Upsi! Something went wrong... Click the button below to go back">
          <Button text="I wanna go home" to="/"></Button>
        </MessageBox>
      </div>
    </>
  )
}

export default NotFound
