import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div>

            <ul class="list-group ">
                <Link  to="/home" class="list-group-item " >Home</Link >
                <Link  to="/contact" class="list-group-item">Contact</Link >
                <Link  to="/about" class="list-group-item">About</Link >

            </ul>


        </div>
    )
}

export default Nav
