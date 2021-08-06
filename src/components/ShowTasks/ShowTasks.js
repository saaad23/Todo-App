import React from "react";
import "./show-task.css";

import { CgNotes } from "react-icons/cg";

const ShowTasks = (props) => {
  const { describeText, assignText, notifyText, notes, date } = props;
  return (
    <div>
      <div className="contents">
        <p className="todo-heading">{describeText}</p>
        <p className="todo-element">{assignText}</p>
        <p className="todo-element">{notifyText}</p>
        <p className="todo-element">{notes}</p>
        <p className="todo-element">{date}</p>
      </div>
    </div>
  );
};

export default ShowTasks;
