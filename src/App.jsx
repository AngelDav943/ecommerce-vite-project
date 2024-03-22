import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import Homepage from './pages/Homepage'

import Header from './components/Header.jsx'
import { Container } from '@mui/material';

import { InfoProvider } from './context/useInfo.jsx'
import { CartProvider } from './context/useCart.jsx'

import Product from './pages/ProductView.jsx'
import Discover from './pages/Discover.jsx'
import Search from './pages/Search.jsx'
import Cart from './pages/Cart.jsx'

function App() {

  return <InfoProvider>
    <CartProvider>
      <Header />
      <Container className='main'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product" element={<Homepage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={< Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={< Register />} />
        </Routes>
      </Container>
    </CartProvider>
  </InfoProvider>
}

export default App
