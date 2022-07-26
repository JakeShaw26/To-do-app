import React from "react";
import ReactDOM from "react-dom";
// import TodoContainer from "./classBased/Components/TodoContainer/TodoContainer";
import ".././src/Styles/index.css";
// import "./classBased/App.css";
import TodoContainer from "./functionBased/Components/TodoContainer/TodoContainer";
import "./functionBased/App.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
