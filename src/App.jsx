import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Root from './components/root'
import Main from './components/main'
import NotFound from './components/notFound'
import Home from './components/home'

/**
 * Main application component that sets up routing for different views.
 * @returns {JSX.Element} The rendered JSX element representing the App component.
 */

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="library" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
