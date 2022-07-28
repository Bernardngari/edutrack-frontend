import React, {useState,useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";

function App() {
  const[dark, setDark] = useState(false);
  function handleDarkToggle(){
		setDark((dark) => !dark)
	}

  const[action, setAction] = useState([]);
	useEffect(() => {
		fetch("https://edutrackapi.herokuapp.com/actionItem")
		.then(r => r.json())
		.then((data) => setAction(data))
	},[])
  function onAddTask(task){
    setAction([...action, task])
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
        <Route path="/tasklist" element={<TaskList action={action}/>} />
        <Route path="/newtask" element={<NewTask onAddTask={onAddTask}/>} />
      </Routes>
    </div>
  );
}

export default App;
