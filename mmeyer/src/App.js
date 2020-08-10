import React from "react";
import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import RealState from "./components/RealState.jsx";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#F9F1F1"}}>
      <Header />
      <Profile />
      <RealState />
    </div>
  );
}
export default App;
