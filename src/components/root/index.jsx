import { Outlet } from 'react-router-dom'
import Header from '../header'
import RootCSS from './Root.module.css'
import Footer from '../footer'

/**
 * Root Component
 *
 * The `Root` component serves as the top-level component of the application.
 * It includes the Header, main content (rendered by the Outlet component), and Footer.
 *
 */

const Root = () => {
  /**
   * Render Function
   *
   * Renders the Root component with the Header, main content (Outlet), and Footer.
   *
   * @returns {JSX.Element} The rendered Root component.
   */
  return (
    <>
      <Header />
      <div className={RootCSS.mainContent}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Root
