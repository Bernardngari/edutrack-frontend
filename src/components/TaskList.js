import React from "react";
import Container from "./Container";
import Table from "./Table";

function TaskList({action}){
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