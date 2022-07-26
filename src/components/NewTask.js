import Container from "./Container";
import React,{useState} from "react";

function NewTask({onAddTask}){
	const [choice, setChoice] = useState("Not started")
	const[formdata, setFormData] = useState({
		topic:"",
		completion:"",
		priority:"",
		url:""
	})
	function onFormChange(event){
		setFormData({...formdata, [event.target.name]:event.target.value})
	}

	function handleSubmit(e){
		e.preventDefault();
		onAddTask(formdata)
		setTimeout(()=>setFormData({
		topic:"",
		completion:"",
		priority:"",
		url:""
	}),1000)
	}
							return <Container>
								<div className="newtask-form">
									<form onSubmit={handleSubmit}>
								<div className="form">
										<label htmlFor="topic">Create new task</label>
										<input type="text" placeholder="Enter new study topic" required name="topic" onChange={onFormChange} value={formdata.topic}/>
								</div>
								<div className="form">
									<label htmlFor="task">Completion</label>
									<select name="completion" value={choice} required onChange={(e)=>setChoice(e.target.value)}>
										{/*<option value={"Choose one option"} disabled>Choose one option</option>*/}
										< option value={"Not started"}>Not Started</option >
										< option value={"WIP"}>WIP</option >
										< option value={"Completed"}>Completed</option > 
									</select>
								</div>
								<div className="form">
									<label>Task Priority</label>
									<select onChange={onFormChange} name="priority" defaultValue={"Choose one option"} required value={formdata.priority}>
										<option value={"Choose one option"} disabled>Choose one option</option>
										< option value={"low"} label="low"></ option >
										< option value={"high"} label="high"></option >
									</select>
								</div>
								<div className="form">
									<label name="url">Enter URL</label>
									<input type="url" placeholder="Enter resource URL" required name="url" onChange={onFormChange} value={formdata.url}/>
								</div>
								<div className="form">
									<button type="submit" className="submit">Submit</button>
								</div>
							</form>
								</div>
							</Container>
}
export default NewTask;