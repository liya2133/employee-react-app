import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddEmployee from './components/AddEmployee'
import SearchEmployee from './components/SearchEmployee'
import NavigationBar from './components/NavigationBar'
import DeleteEmployee from './components/DeleteEmployee'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewEmployees from './components/ViewEmployees'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AddEmployee/>} />
      <Route path='/search' element={<SearchEmployee/>} />
      <Route path='/delete' element={<DeleteEmployee/>} />
      <Route path='/view' element={<ViewEmployees/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
