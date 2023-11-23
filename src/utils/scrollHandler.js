/**
 * Handle the scrolling behavior for the Header Component.
 * The function adjusts the position of the header based on the direction of scrolling.
 *
 * @function
 * @returns {void}
 *
 * @example
 * // Example usage in a component
 * window.addEventListener('scroll', handleScroll);
 *
 * @description
 * The function checks the scrolling direction and adjusts the position of the header accordingly.
 * If scrolling up, the header is set to be visible (top: 0).
 * If scrolling down, the header is moved out of view (top: -200px).
 */

let prevScrollPos = window.scrollY

function handleScroll() {
  const currentScrollPos = window.scrollY

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    document.getElementById('header').style.top = '0'
  } else {
    // Scrolling down
    document.getElementById('header').style.top = '-200px'
  }

  prevScrollPos = currentScrollPos
}

export default handleScroll
