import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
    <Routes>
      <Route path= '/t' element={<Home/>}/>
      <Route path= '/r' element={<Add/>}/>
    </Routes>   
    </>
  )
}

export default App
