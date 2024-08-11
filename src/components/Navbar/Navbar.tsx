import React from 'react'
import c from './Navbar.module.css'
function Navbar() {
    return (
        <nav className={c.navigate}>
            <a href='#' className={c.item}>Home</a>
            <a href='#' className={c.item}>About</a>
            <a href='#' className={c.item}>Services</a>
            <a href='#' className={c.item}>Contact</a>
        </nav>
    )
}

export default Navbar