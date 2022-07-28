import React, {useState, useEffect}from "react";
//import Container from "./Container";
import "../index.css"

function Table({action}){
	const[obj, setObj] = useState({action});
	
	function onClick(e){
		let verb= e.target.name;
		let id = e.target.id;
		let URL = `https://edutrackapi.herokuapp.com/actionItem/${id}`
		console.log(e.target.index);
		fetch("URL",{
			method :`${verb}`,
			headers: {
				"Content-Type":"application/json"
			},
			body: JSON.stringify()
		})
		.then(r => r.json())
		.then(data=> data)
	}

	console.log(obj);

	const tableRow = action.map((item) => {
		return (
			<React.Fragment key={item.id}>
				<tr key={item.id}>
							<td>{item.topic}</td>
							<td>{item.completion}</td>
							<td>{item.priority}</td>
							<td><a target="_blank "href={item.url}>{item.url}</a></td>
							<td><button onClick={onClick}name="PATCH">Update</button></td>
							<td><button onClick={onClick} name="DELETE">Delete</button></td>
				</tr>
			</React.Fragment>
		)
})
	return(
		<React.Fragment>
			<table>
				<thead>
					<tr>
						<th>Topic</th>
						<th>Completion</th>
						<th>Priority</th>
						<th>URL</th>
					</tr>
				</thead>
				<tbody>
					{tableRow}
				</tbody>
			</table>
		</React.Fragment>
	)
}

export default Table;