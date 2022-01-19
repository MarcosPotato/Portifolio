import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"

import MenuBar from './components/MenuBar'
import AppRoutes from './routes'

import { ThemeProvider } from './hooks/themeContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MenuBar />
        <AppRoutes/>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
