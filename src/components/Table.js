import React from "react";
import Container from "./Container";

function Table({action}){

	const tableRow = action.map((item) => {
		return (
			<React.Fragment key={item.id}>
				<tr key={item.id}>
							<td>{item.topic}</td>
							<td>{item.completion}</td>
							<td>{item.priority}</td>
							<td>{item.url}</td>
							<td><button>Update</button></td>
							<td><button>Delete</button></td>
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