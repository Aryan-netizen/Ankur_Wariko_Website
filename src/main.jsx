import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CursorProvider } from './context/CursorContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './context/ScrollToTop.jsx'
import { CoursesProvider } from './context/CoursesProvider.jsx'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <CoursesProvider>
    <CursorProvider>
      <ScrollToTop />
      <App />
    </CursorProvider>
    </CoursesProvider>
    </BrowserRouter>

)
