import React, {useState} from "react"
import {NavLink} from "react-router-dom"

function Navbar(){
	

	return(
		<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/tracker">Tracker</NavLink>
				<NavLink to="/">Contact</NavLink>
				
		</nav>
	)
}

export default Navbar;