import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {AppProvider} from "./assets/Context"
ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>

 
    <App />
  

    </AppProvider>
)
