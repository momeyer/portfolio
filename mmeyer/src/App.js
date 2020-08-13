import React from "react";
import Header from "./components/Header.jsx";
import Flack from "./components/Flack.jsx";
import RealState from "./components/RealState.jsx";

import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#dcdcdc" }}>
      <Header />
      <RealState />
      <Flack />
    </div>
  );
}
export default App;
