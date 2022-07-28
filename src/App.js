import React, {useState,useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";

function App(){
  const[dark, setDark] = useState(false);
  function handleDarkToggle(){
		setDark((dark) => !dark)
	}

  const[action, setAction] = useState([]);
  const[onDelete, setOnDelete] = useState(true)
	useEffect(() => {
		fetch("https://edutrackapi.herokuapp.com/actionItem")
    .then(r=>r.json())
    .then(data=>setAction(data))
	},[onDelete])
  
  function onAddTask(task){
  fetch("https://edutrackapi.herokuapp.com/actionItem",{
    method :"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(task)
  })
  .then(r=>r.json())
  .then(newItem=>setAction([...action, newItem]))
  }

  function persistDel(deletedItem){
    console.log(deletedItem.id);
    const newList = action.filter(item=> item.id !==deletedItem.id)
    setAction(newList)
     setOnDelete(()=>!onDelete)
  }
  return (
    <div className="App">
      <Container>
        <div className="nav-button-container">
          <Navbar />
          <button onClick={handleDarkToggle}>{dark? "DARK":"LIGHT"} MODE</button>
        </div>
      </Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasklist" element={<TaskList action={action} persistDel={persistDel}/>} />
        <Route path="/newtask" element={<NewTask onAddTask={onAddTask}/>} />
      </Routes>
    </div>
  );
}

export default App;
