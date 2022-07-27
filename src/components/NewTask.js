import Container from "./Container";
function NewTask(){
							return <Container>
								<div className="newtask-form">
									<form>
								<div className="form">
										<label htmlFor="task">Create new task</label>
										<input type="text" placeholder="Enter new study topic" required/>
								</div>
								<div className="form">
									<label htmlFor="task">Completion</label>
									<select>
										< option value="Not started">Not Started</option >
										< option value="WIP">WIP</option >
										< option value="Completed">Completed</option >
									</select>
								</div>
								<div className="form">
									<label>Task Priority</label>
									<select>
										< option value="low" label="low"></ option >
										< option value="high" label="high"></option >
									</select>
								</div>
								<div className="form">
									<label name="url">Enter URL</label>
									<input type="url" placeholder="Enter resource URL" required/>
								</div>
								<div className="form">
									<button type="submit" className="submit">Submit</button>
								</div>
							</form>
								</div>
							</Container>
							 

}

export default NewTask;