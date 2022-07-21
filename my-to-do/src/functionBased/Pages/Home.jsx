import React from "react";
import Header from "../Components/Header/Header";
import InputTodo from "../Components/InputTodo/InputTodo";
import TodosList from "../Components/TodosList/TodosList";

function Home() {
  return (
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
  );
}

export default Home;
