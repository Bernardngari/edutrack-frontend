import React, {useState} from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
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
    </div>
  );
}

export default App;
