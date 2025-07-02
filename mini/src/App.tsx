import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { div } from 'framer-motion/client'
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom'
import { Home } from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
