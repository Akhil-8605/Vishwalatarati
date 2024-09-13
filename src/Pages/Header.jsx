import React from 'react'
import { useState } from "react"
import './Header.css'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';

function Header() {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        
        if (window.scrollY > 50) {  
          header.classList.add('blur');
        } else {
          header.classList.remove('blur');
        }
      });      
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div>   
        <header className="header">
            <div className="header-content">
                <div className="logo-container">
                    <img src={logo} alt="VLR Logo" className="logo"/>
                </div>
                
                <nav className="desktop-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/About" className="nav-link">About</Link>
                    <Link to="/Services" className="nav-link">Services</Link>
                    <Link to="/Careers" className="nav-link">Careers</Link>
                    <Link to="/Contacts" className="nav-link">Contact</Link>
                </nav>
                <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>
            {isMenuOpen && (
                <nav className="mobile-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/About" className="nav-link">About</Link>
                    <Link to="/Services" className="nav-link">Services</Link>
                    <Link to="/Careers" className="nav-link">Careers</Link>
                    <Link to="/Contacts" className="nav-link">Contact</Link>
                </nav>
            )}
        </header>
        </div>
    )
}

export default Header