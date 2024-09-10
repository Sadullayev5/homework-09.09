import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Home/Home'
import Cart from './Cart/Cart'

const RouteController = () => {
  return (
    <Routes>
      <Route path="/" element={< Home/>} />
      <Route path="/cart" element={< Cart/>} />
    </Routes>
  )
}

export default RouteController