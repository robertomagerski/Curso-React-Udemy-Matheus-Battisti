import React from 'react'
//CSS
import './Navbar.css';
//React Router
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
        </nav>
    </div>
  )
}

export default Navbar