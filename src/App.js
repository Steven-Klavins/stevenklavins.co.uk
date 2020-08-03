import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import BackDrop from "../src/Components/SideDrawer/BackDrop";
import SideDrawer from "../src/Components/SideDrawer/SideDrawer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideDrawer />
      <BackDrop />
      <p>Page content</p>
    </div>
  );
}

export default App;
