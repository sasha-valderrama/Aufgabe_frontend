import footerText from './../../utils/footerText.js'
import FooterCSS from './Footer.module.css'

/**
 * React functional component representing the website's footer.
 * @component
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => {
  return (
    <>
      <footer className={FooterCSS.footer}>
        <div className={FooterCSS.container}>
          <div className={FooterCSS.scroll_container}>
            <p>
              {`${footerText.text} - ${footerText.poemName} by ${footerText.author}` }
            </p>
          </div>
          <img className={FooterCSS.logo} src="./logo.png" />
        </div>
      </footer>
    </>
  )
}
export default Footer
