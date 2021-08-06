import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Container } from "react-bootstrap";
import "./new-list.css";

const NewList = (props) => {
  ///// States for WYSIWYG Editor ///////////////
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  ///////// For Setting Heading of list Form //////////
  const [text, setText] = useState("");
  const textChangeHandler = (e) => {
    setText(e.target.value);
  };
  //////// For Hiding List Form /////////////
  const editbarHandler = (e) => {
    e.preventDefault();
    props.onHideForm(false);
  };

  //////// Submitting Form ///////////////
  const submitHandler = (e) => {
    e.preventDefault();
    const listInfo = {
      heading: text,
      content: editorState.getCurrentContent().getPlainText(),
    };

    ///// Passing entered Data to Parent which is Header.JS //////////
    props.onAddList(listInfo);
    props.onHideForm(false);
  };
  ///////// For Hiding WYSIWYG Editor ///////////////

  const [showEditor, setShowEditor] = useState(false);
  const editorHandler = () => {
    setShowEditor(true);
  };

  //// For Hiding Add info  Text on Click /////////////
  const [showText, setShowText] = useState(true);
  const textHandler = () => {
    setShowText(false);
  };

  return (
    <Container>
      <form className="header-form" onSubmit={submitHandler}>
        <div className="custom-box header-form">
          <input
            className="border-none"
            type="text"
            placeholder="Name this list..."
            onChange={textChangeHandler}
            required
          />
          <div onClick={editorHandler}>
            {showText ? (
              <p className="opening-editor-txt" onClick={textHandler}>
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

          <div className="list-btn-alignment ">
            <button type="submit" className="add-btn">
              Add this list
            </button>

            <button className="remove-btn" onClick={editbarHandler}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default NewList;
