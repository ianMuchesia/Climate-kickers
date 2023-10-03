import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { backend } from './declarations/backend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Story from './pages/Story';
import Profile from './pages/Profile';
import Create from './pages/Create';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {




  return (
    <BrowserRouter>
    <ToastContainer />
    <Navbar/>
    <main className='mt-[110px]'>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/story" element={<Story/>} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/create" element={<Create/>}/>
    </Routes>
    </main>
   
    </BrowserRouter>
  )
}

export default App
