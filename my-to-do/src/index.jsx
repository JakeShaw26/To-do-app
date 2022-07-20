import React from "react";
import ReactDOM from "react-dom";
// import TodoContainer from "./classBased/Components/TodoContainer/TodoContainer";
import ".././src/Styles/index.css";
// import "./classBased/App.css";
import TodoContainer from "./functionBased/Components/TodoContainer/TodoContainer";
import "./functionBased/App.css";

ReactDOM.render(<TodoContainer />, document.getElementById("root"));
