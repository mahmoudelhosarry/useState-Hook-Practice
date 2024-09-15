import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [x, y] = useState(time);
  function z() {
    let newTime = new Date().toLocaleTimeString();
    y(newTime);
  }
  function rleoadTime() {
    z();
    setInterval(rleoadTime, 1000);
  }

  return (
    <div className="container">
      <h1>{x}</h1>
      <button onClick={rleoadTime}>Get Time</button>
    </div>
  );
}

export default App;
