import { AiOutlineHome } from "react-icons/ai"; 
import { BiCart } from "react-icons/bi"; 
import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/"><AiOutlineHome /></Link></li>
            <li><Link to="/cart"><BiCart /></Link></li>
        </ul>
    </nav>
  )
}

export default Nav