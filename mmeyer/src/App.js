import React from "react";
import Header from "./components/Header.jsx";
import Flack from "./components/Flack.jsx";
import RealState from "./components/RealState.jsx";
import Pinocchio from "./components/Pinocchio.jsx";
import Contact from "./components/ContactInfo.jsx";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#dcdcdc" }}>
      <Header />
      <RealState />
      <Flack />
      <Pinocchio />
      <Contact />
    </div>
  );
}
export default App;
