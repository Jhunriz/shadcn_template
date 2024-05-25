import './App.css'
import { Routes, Route } from "react-router-dom";
import MainLayout from './Layout/MainLayout'
import Dashboard from './Pages/Dashboard/Dashboard'
import Restricted404 from './Pages/Restricted404';




function App() {

  return (
    <>
       <Routes>
         <Route path='/' element={<MainLayout/>} />
         <Route path='/dashboard' element={<Dashboard/>} />
         <Route path='/restricted404' element={<Restricted404/>} />
       </Routes>
    </>
  )
}

export default App
