import React, { useState } from "react";
import TodoForm from "../TodoForm";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "completed",
    },
    {
      id: 2,
      title: "Sleep",
      status: "new",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

  const handleTodoClickP = (todo, idx) => {
    let idx1 = todo.id - 1;
    console.log(idx, idx1);
    const newTodoList = [...todoList];
    newTodoList[idx1] = {
      ...newTodoList[idx1],
      status: newTodoList[idx1].status === "new" ? "completed" : "new",
    };

    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus("all");
  };

  const handleShowCompleteClick = () => {
    setFilteredStatus("completed");
  };

  const handleShowNewClick = () => {
    setFilteredStatus("new");
  };

  const renderedTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || todo.status === filteredStatus
  );
  function handleTodoFormSubmit(dataFormSubmit) {
    const newTodoList = [...todoList];
    const newItem = {
      id: newTodoList.length + 1,
      ...dataFormSubmit,
      status: "new",
    };
    newTodoList.push(newItem);
    setTodoList(newTodoList);
  }

  return (
    <div>
      <h3>Todo List</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClickP} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompleteClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
