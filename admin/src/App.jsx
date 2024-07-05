import React from 'react'
import Navbar from './components/navBar/Navbar'
import Sidebar from './components/sideBar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddMangoes from './pages/add/AddMangoes'
import Varieties from './pages/varieties/Varieties'
import Orders from './pages/orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <div>
      <ToastContainer />
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<AddMangoes/>} />
          <Route path='/varieties' element={<Varieties/>} />
          <Route path='/orders' element={<Orders/>} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App