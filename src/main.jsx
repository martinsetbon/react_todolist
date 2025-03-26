import { StrictMode } from 'react' // Enables additional runtime checks and warnings in development mode
import { createRoot } from 'react-dom/client' // Imports the new React 18 method for rendering components
import App from './App.jsx' // Imports the main App component

// Selects the root element from the HTML file and renders the App component inside it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Renders the main App component */}
  </StrictMode>,
)
