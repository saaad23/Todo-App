import React, { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import ShowTasks from "../ShowTasks/ShowTasks";
import TodoList from "../TodoList/TodoList";
import { todos } from "../../mockData/TodoData";
import "./show-list.css";

const ShowList = (props) => {
  ///// List for storing Todo Items
  const [todoList, setTodoList] = useState(todos);

  const [showAddTodo, setShowAddTodo] = useState(false);
  const [hideTodoButton, setHideTodoButton] = useState(false);

  const { heading, content } = props;

  const onShowTodoHandler = () => {
    setShowAddTodo(true);
    setHideTodoButton(true);
  };

  const getTodoHandler = (data) => {
    setTodoList((prevList) => {
      return [data, ...prevList];
    });
  };
  console.log(todoList);
  const hideTodoHandler = (data) => {
    setShowAddTodo(data);
    setHideTodoButton(data);
  };
  return (
    <div className="todo-list-data ">
      <h1 className="list-name">
        <BsCircleFill /> {heading}
      </h1>
      <div>
        <p>{content}</p>
      </div>

      <div>
        {todoList.map((item) => (
          <div className="contents">
            <ShowTasks
              describeText={item.describeText}
              assignText={item.assignText}
              notifyText={item.notifyText}
              notes={item.notes}
              date={item.date}
            />
          </div>
        ))}
      </div>
      {hideTodoButton ? null : (
        <button className="todo-btn" onClick={onShowTodoHandler}>
          Add a to-do
        </button>
      )}

      {showAddTodo ? (
        <TodoList hideTodo={hideTodoHandler} getTodo={getTodoHandler} />
      ) : null}
    </div>
  );
};

export default ShowList;
