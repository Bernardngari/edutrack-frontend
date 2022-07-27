import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {
  const[dark, setDark] = useState(false);
  function handleDarkToggle(){
		setDark((dark) => !dark)
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
        {/*<Route path="/tracker" element={<Tracker />} />*/}
        {/*<Route path="/" element={<Contact/>} />*/}
      </Routes>
    </div>
  );
}

export default App;
