import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Container } from "react-bootstrap";
import "./todo-list.css";
import DateData from "../DateData/DateData";

const TodoList = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [showEditor, setShowEditor] = useState(false);
  const [showText, setShowText] = useState(true);

  const [describeText, setDescribeText] = useState("");
  const [assignText, setAssignText] = useState("");
  const [notifyText, setNotifyText] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //  For Date Component
  const [showDateComponent, setShowDateComponent] = useState(false);

  const renderDateComponent = () => {
    {
      setShowDateComponent(!showDateComponent);
    }
  };
  // Date Component Ends Here

  const describeTextHandler = (e) => {
    setDescribeText(e.target.value);
  };

  const assignTextHandler = (e) => {
    setAssignText(e.target.value);
  };

  const notifyTextHandler = (e) => {
    setNotifyText(e.target.value);
  };

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const textHandler = () => {
    setShowText(false);
  };
  const editorHandler = () => {
    setShowEditor(true);
  };
  const todoInfo = {
    describeText: describeText,
    assignText: assignText,
    notifyText: notifyText,
    notes: editorState.getCurrentContent().getPlainText(),
    date: enteredDate,
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.getTodo(todoInfo);
    props.hideTodo(false);
  };

  const cancelTodoHandler = () => {
    props.hideTodo(false);
  };
  return (
    <form className="form-group" onSubmit={submitHandler}>
      <div className="custom-box ">
        <input
          className="todo-heading-border"
          type="text"
          placeholder="Describe this to-do"
          onChange={describeTextHandler}
        />

        <div className="box">
          <label>Assigned to</label>
          <input
            className="assignto-box"
            type="text"
            placeholder="Type Names to Assign"
            onChange={assignTextHandler}
          />
        </div>
        <div className="box">
          <label>When done, notify</label>
          <input
            className="assignto-box"
            type="text"
            placeholder="Type Names to Assign"
            onChange={notifyTextHandler}
          />
        </div>
        <div className="date-box">
          <label className="date-label">Date</label>
          <div>
            <p
              className={showDateComponent ? "hide-text" : "show-text"}
              onClick={renderDateComponent}
            >
              Select Date
            </p>
            {showDateComponent && <DateData />}
          </div>
        </div>
        <div className="editor-box">
          <label>Notes</label>
          <div className="assignto-box" onClick={editorHandler}>
            {showText ? (
              <p className="opening-editor-text" onClick={textHandler}>
                Add extra details or attatch a file...
              </p>
            ) : null}

            {showEditor ? (
              <Editor
                editorState={editorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                toolbar={{
                  options: ["inline", "list", "colorPicker", "link", "history"],
                  inline: { options: ["bold", "italic", "strikethrough"] },
                }}
                onEditorStateChange={onEditorStateChange}
              />
            ) : null}
          </div>
        </div>
        <div className="list-btn-alignment ">
          <button type="submit" className="btn-styling">
            Add this list
          </button>
          <button
            className="cancel-btn"
            type="button"
            onClick={cancelTodoHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoList;
