import React from "react";
import './App.css';
import MediaCard from "./MediaCard";

function App() {
  return (
    <div className="App">
      <MediaCard logo={"facebook"} username={"@nathanf"} change={12} numFollowers={2013}/>
    </div>
  );
}

export default App;
