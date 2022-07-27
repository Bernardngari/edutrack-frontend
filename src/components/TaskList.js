import React, {useState, useEffect} from "react";
import Container from "./Container";
import Table from "./Table";

function TaskList(){
	const[action, setAction] = useState([]);
	useEffect(() => {
		fetch("https://edutrackapi.herokuapp.com/actionItem")
		.then(r => r.json())
		.then((data) => setAction(data))
	},[])

	console.log(action);
	return(
		<Container>
			<div className="table">
				<h1>ACTION ITEMS</h1>
				<Table action={action}/>
			</div>
		</Container>

	)
}

export default TaskList;