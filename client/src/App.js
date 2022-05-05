import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login To App</h1>
        <input type={"text"} id={"username"}/>
        <br/>
        <input type={"text"} id={"password"}/>
        <br/>
        <button id={"login-button"}>LOGIN</button>
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
