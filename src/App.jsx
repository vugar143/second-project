import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from "./assets/components/navbar/Navbar"
import Sidebar from './assets/components/sidebar/Sidebar'
import Submenu from './assets/components/submenu/Submenu'
import Hero from "./assets/components/hero/Hero"
function App() {
  const [count, setCount] = useState(0)

  return (
  
    <>
   <Navbar/>
   <Submenu/>
   <Sidebar/>
   <Hero/>

   </>
  )
}

export default App
