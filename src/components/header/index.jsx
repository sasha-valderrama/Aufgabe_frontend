import { useLocation} from 'react-router-dom'
import Circles from '../ui/circles'
import IconBox from '../ui/iconBox'
import HeaderCSS from './Header.module.css'
import { useEffect } from 'react'
import ConfigLink from '../ui/configLink'
import handleScroll from './../../utils/scrollHandler'

/**
 * React functional component representing the website header.
 * Manages visibility based on scroll position and provides navigation elements.
 * @component
 * @returns {JSX.Element} The rendered Header component.
 */

const Header = () => {
  /**
   * Object representing the current pathname obtained from react-router-dom.
   * @type {object}
   */
  const {pathname} = useLocation()

  /**
   * Boolean indicating whether the current route is the home page.
   * @type {boolean}
   */
  const isHome = pathname === '/'


  /**
   * Effect hook to attach and clean up scroll event listeners.
   * @returns {void}
   */
  useEffect(() => {
    // Attach the scroll event listener for general scrolling
    window.addEventListener('scroll', handleScroll)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  /**
   * JSX representing the rendered Header component.
   * @returns {JSX.Element} The rendered Header component.
   */
  return (
    <>
      <header id="header" className={HeaderCSS.header}>
        <Circles number={3} />
        {isHome ? (
          <a
            href="https://github.com/sasha-valderrama"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBox type="github" />
          </a>
        ) : (
          <ConfigLink to="/">
            <IconBox type="home" />
          </ConfigLink>
        )}
      </header>
    </>
  )
}

export default Header