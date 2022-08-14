import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [taskName, settaskName] = useState("");
  const [taskArray, settaskArray] = useState([
    "Test tsk only not real ",
    "Test tsk only not real ",
    "Test tsk only not real ",
  ]);

  const addTask = () => {
    if (taskName == "") return;
    let tasks = [...taskArray];
    tasks.push(taskName);
    console.log("Test button ");
    settaskName("");
    settaskArray(tasks);
  };
  return (
    <div className="HomeContainer">
      <div className="App">
        <h1 style={{ color: "white" }}>New Todo List</h1>
        <h2>Sub title only </h2>

        <h3> title for branch new </h3>

        <label>Tasks input</label>
        <input
          placeholder="Add task... "
          value={taskName}
          name="task"
          onChange={(e) => {
            console.log(taskName);
            settaskName(e.target.value);
          }}
        />

        <button onClick={addTask} style={{ padding: 20 }}>
          Add
        </button>
      </div>
      {taskArray.length > 0 ? (
        <div className="tasksContainer">
          {taskArray.map((task, index) => (
            <div>
              <p style={{ fontSize: 20 }}>
                {index + 1} : {task}
              </p>
            </div>
          ))}
        </div>
      ) : null}
      <footer className="Footer">
        <ul>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">youtube</a>
          </li>
          <li>
            <a href="#">google</a>
          </li>
        </ul>
      </footer>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
