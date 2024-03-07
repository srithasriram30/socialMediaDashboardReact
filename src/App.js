import React from "react";
import './App.css';
import MediaCard from "./MediaCard";

function App() {
  return (
    <div className="App">
        <div className="mediaRow">
            <MediaCard logo={"facebook"} username={"@nathanf"} change={"+12"} numFollowers={"1987"}/>
            <MediaCard logo={"twitter"} username={"@nathanf"} change={"+99"} numFollowers={"1044"}/>
            <MediaCard logo={"instagram"} username={"@realnathanf"} change={"+1000"} numFollowers={"11k"} />
            <MediaCard logo={"youtube"} username={"Nathan F"} change={"-164"} numFollowers={"8239"}/>
        </div>

    </div>
  );
}

export default App;
