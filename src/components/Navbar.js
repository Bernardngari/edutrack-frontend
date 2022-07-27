import {NavLink} from "react-router-dom"

function Navbar(){
	return(
		<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/tracker">Tracker</NavLink>
				<NavLink to="/contact">Contact</NavLink>
		</nav>
	)
}

export default Navbar;