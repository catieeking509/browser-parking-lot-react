import React from 'react'
import { NavLink } from 'reactstrap'


import './NavBar.css';


export default function NavBar() {
  return (
    <div className='navbar'>
        <NavLink href="./">Home</NavLink>
        &nbsp;
        <NavLink href="#contact">Contact</NavLink>
    </div>
  );
}

