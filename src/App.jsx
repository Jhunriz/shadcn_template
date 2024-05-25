import './App.css'
import { Routes, Route } from "react-router-dom";
import MainLayout from './Layout/MainLayout'
import Dashboard from './Pages/Dashboard/Dashboard'
import Restricted404 from './Pages/Restricted404';
import Login from './Pages/Login';




function App() {

  return (
    <>
       <Routes>
         <Route path='/' element={<Login />} />
         <Route path='/dashboard' element={<Dashboard/>} />
         <Route path='*' element={<Restricted404/>} />
       </Routes>
    </>
  )
}

export default App
