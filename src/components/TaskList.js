import React from "react";
import Container from "./Container";
import Table from "./Table";

function TaskList({action,persistDel}){
	function onDeleteItem(deletedItem){
		persistDel(deletedItem)
	}
	return(
		<Container>
			<div className="table">
				<h1>ACTION ITEMS</h1>
				<Table action={action} onDeleteItem={onDeleteItem}/>
			</div>
		</Container>

	)
}

export default TaskList;