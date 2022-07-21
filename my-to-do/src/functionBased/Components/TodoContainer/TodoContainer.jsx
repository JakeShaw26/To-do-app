import React, { useState, useEffect } from "react";
import TodosList from "../TodosList/TodosList";
import Header from "../Header/Header";
import InputTodo from "../InputTodo/InputTodo";
import { v4 as uuidv4 } from "uuid";
import { Route, Routes } from "react-router-dom";
import About from "/Users/jakeshaw/Upskilling/To-do-app/my-to-do/src/functionBased/Pages/About.jsx";
import NotMatch from "/Users/jakeshaw/Upskilling/To-do-app/my-to-do/src/functionBased/Pages/NotMatch.jsx";
import Navbar from "/Users/jakeshaw/Upskilling/To-do-app/my-to-do/src/functionBased/Components/Navbar/Navbar.jsx";
import SinglePage from "../../Pages/SinglePage";

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <div className="inner">
                <Header />
                <InputTodo addTodoProps={addTodoItem} />
                <TodosList
                  todos={todos}
                  handleChangeProps={handleChange}
                  deleteTodoProps={delTodo}
                  setUpdate={setUpdate}
                />
              </div>
            </div>
          }
        ></Route>

        <Route path="/about/*" element={<About />} />
        <Route path={`/about-content`} element={<SinglePage />} />

        {/* <Route path="*" element={<NotMatch />} /> */}
      </Routes>
    </>
  );
};

export default TodoContainer;
