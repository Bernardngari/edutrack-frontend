import {NavLink} from "react-router-dom"

function Navbar(){
	return(
		<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/tasklist">TaskList</NavLink>
				<NavLink to="/newtask">New Task</NavLink>
		</nav>
	)
}

export default Navbar;