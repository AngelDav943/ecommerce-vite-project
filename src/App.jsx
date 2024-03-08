import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import Homepage from './pages/Homepage'

import Header from './components/Header.jsx'
import { Container } from '@mui/material';

import { InfoProvider } from './context/useInfo.jsx'

function App() {

  return <InfoProvider>
    <Header />
    <Container className='main'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={< Register />} />
      </Routes>
    </Container>
  </InfoProvider>
}

export default App
