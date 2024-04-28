import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter , Routes, Route} from "react-router-dom"
import App from './App.jsx'
import Navbar from './components/navbar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Navbar />
      <Routes>
        
      </Routes>
      
    </BrowserRouter>
)
