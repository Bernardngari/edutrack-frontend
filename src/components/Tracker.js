import React, {useState, useEffect} from "react";
import Container from "./Container";
import Table from "./Table";

function Tracker(){
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
				<Table action={action}/>
			</div>
		</Container>

	)
}

export default Tracker;