# Table of Contents

- [Getting Stared](#GettingStarted)
- [Installation](#Installation)
- [Folder Structure](#FolderStructure)

## Getting Started

A React app that fetches book's title information from an API and displays it.

You can access this project [here](https://libraryapp-sasha.netlify.app/)

This project was bootstrapped with [Vite](https://vitejs.dev/)

## Installation

1. Clone the repository
2. Run `yarn install` to install dependencies.
3. Create a `.env` file with your API key: `VITE_REACT_APP_GOOGLE_BOOKS_API_KEY=your_api_key`.
4. Run `yarn dev` to start the development server.

## Folder Structure

- `public/` 
  - `assets`
    - `cursor/`: imported icons for custom cursor (in index.css) 
    - `fonts/` :imported in index.css (@font-face) 
    - `icons/`: imported icons in img inside the components
- `src/`
  - `components/`: Reusable React components. 
    - `component/` 
      - `index.jsx`: React Component. 
      - `Component.module.css`: Modular styling of component
    - `ui/` : Reusable small UI components
  - `utils/`: JS scripts used by the components
  - `index.css`: Global styles.
  - `keyframes.css`: Global keyframes
  - `variables.css`: Global variables


## Deployment

The app is deployed on [Netlify](https://www.netlify.com/). Deployment is automatic on pushes to the `main` branch.

## Others

### Icons

- [Github 96x96](https://icons8.com/icon/106567/github)

- [Home 96x96](https://icons8.com/icon/59809/home)

- [Search 48x48](https://icons8.de/icon/7695/suche)

- [Close 67x67](https://icons8.de/icons/set/close)

- [Cursor 48x48](https://icons8.de/icon/7MKaf17ydBsH/mauszeiger)

- [Cursor hover 48x48](https://icons8.de/icon/VqlHyFPIPos4/mauszeiger)

- [Cursor typing 48x48](https://icons8.de/icon/mL2IXE95KumD/typing-cursor)
