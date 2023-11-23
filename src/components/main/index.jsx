import { useEffect, useState } from 'react'
import Card from '../ui/card'
import LetterBox from '../ui/letterBox'
import SearchBar from '../ui/searchBar'
import MainCSS from './Main.module.css'
import { nanoid } from 'nanoid'

/**
 * Main Component
 *
 * The `Main` component displays a list of title books fetched from the Google Books API
 * based on a user's search query.
 */

const Main = () => {
  // State to manage user's search query and fetched book data
  const [search, setSearch] = useState('')
  const [bookData, setBookData] = useState([])

  // Maximum number of results to fetch per page
  const maxResultsPerPage = 40

  // Google Books API Key from environment variables
  const API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_BOOKS_API_KEY

  /**
   * useEffect Hook
   *
   * Fetches book data when the search query or API key changes.
   */
  useEffect(() => {
    /**
     * fetchData Function
     *
     * Fetches book data from the Google Books API.
     */
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&key=${API_KEY}&maxResults=${maxResultsPerPage}`
        )
        const data = await response.json()

        if (!response.ok) {
          //Debugging: console.error('Fetch failed:', response.statusText)
          throw new Error(data.message || 'Failed to fetch')
        }
        //Debugging: console.log('Fetched data:', data)

        setBookData(data.items || [])
      } catch (error) {
        console.error('Error during fetch', error.message)
      }
    }

    // Only fetch data if there's a search query
    if (search) {
      fetchData()
    }

    // Cleanup function to ensure data is not set on unmounted component
    // return () => {
    //   setBookData([])
    // }
  }, [search, API_KEY])

  /**
   * Render Function
   *
   * Renders the main component with a search bar and a grid of book cards.
   */

  return (
    <>
      <main className={MainCSS.main}>
        <div className={MainCSS.heading}>
          <LetterBox text="Books" />
          <SearchBar
            value={search}
            handleOnChange={({ target }) => setSearch(target.value)}
          />
        </div>
        <div className={MainCSS.grid_cards}>
          {bookData.map((book) => (
            <Card key={nanoid()} book={book} />
          ))}
        </div>
      </main>
    </>
  )
}

export default Main
