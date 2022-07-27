import React, {useState} from "react"
import {NavLink} from "react-router-dom"

function Navbar(){
	function handleDarkToggle(){
		setDark((dark) => !dark)
	}
	const[dark, setDark] = useState(false);
	return(
		<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/tracker">Tracker</NavLink>
				<NavLink to="/">Contact</NavLink>
				<button onClick={handleDarkToggle}>{dark? "DARK":"LIGHT"} MODE</button>
		</nav>
	)
}

export default Navbar;