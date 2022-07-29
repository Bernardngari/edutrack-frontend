import React, {useState, useEffect}from "react";
//import Container from "./Container";
import "../index.css"
function Table({action,onDeleteItem}){
	function onClick(e){
		let verb= e.target.name;
		let id = e.target.id;
		console.log(e.target.id);
		fetch(`https://edutrackapi.herokuapp.com/actionItem/${id}`,{
			method :`${verb}`,
			headers: {
				"Content-Type":"application/json"
			},
			body: JSON.stringify()
		})
		.then(r => r.json())
		.then(deletedItem=> onDeleteItem(deletedItem))
	}
	const tableRow = action.map((item) => {
		return (
			<React.Fragment key={item.id}>
				<tr key={item.id} id={item.id}>
							<td>{item.topic}</td>
							<td>{item.completion}</td>
							<td>{item.priority}</td>
							<td><a target="_blank "href={item.url}>{item.url}</a></td>
							<td><button  className="action" onClick={onClick}name="PATCH" id={item.id}>Update</button></td>
							<td><button  className="action" onClick={onClick} name="DELETE" id={item.id}>Delete</button></td>
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
						<th>Update</th>
						<th>Delete</th>
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