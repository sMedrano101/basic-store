import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Routes from "./Routers";

function App() {
  return (
    <div className="App">
      <h1> Store App</h1>
      <Routes />
    </div>
  );
}

export default App;
