import Button from '../ui/button'
import HomeCSS from './Home.module.css'
import LetterBox from '../ui/letterBox'
import MessageBox from '../ui/messageBox'

/**
 * Home Component
 *
 * The `Home` component represents the home page of the website.
 *
 */

const Home = () => {
  /**
   * Render Function
   *
   * Renders the Home component with a welcome message, introductory text,
   * and a button to navigate to the library.
   *
   * @returns {JSX.Element} The rendered Home component.
   */
  return (
    <>
      <div className={HomeCSS.home}>
        <LetterBox text="Welcome!" />
        <MessageBox normalText="Hi! I´m Sasha* and this is a fun Website I´ve created for you.">
          <Button text="Let´s go" to="/library"></Button>
        </MessageBox>
      </div>
    </>
  )
}
export default Home
