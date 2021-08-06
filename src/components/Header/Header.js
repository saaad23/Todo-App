import React, { useState } from "react";
import { todoListData } from "../../mockData/ListData";
import NewList from "../NewList/NewList";
import ShowList from "../ShowList/ShowList";
import "./header.css";

const Header = () => {
  /////// For Storing List Data ///////////
  const [listdata, setListData] = useState(todoListData);

  /////// For Showing List Data ///////////
  const [showData, setshowData] = useState(false);

  /////// For getting data From Child which is NewList.js ////////////
  const addListHandler = (data) => {
    setListData((prevList) => {
      return [data, ...prevList];
    });
  };

  const showForm = () => {
    setshowData(true);
  };

  ///////// For Hiding Show
  const hideForm = (data) => {
    setshowData(data);
  };
  return (
    <div>
      <nav className="todo-navbar">
        <button type="submit" className="new-btn" onClick={showForm}>
          + New List
        </button>

        <p className="nav-brand">To-dos</p>
      </nav>
      <hr className="line-break" />

      <div>
        {showData ? (
          <NewList onAddList={addListHandler} onHideForm={hideForm} />
        ) : null}
      </div>

      <div className="todo-list-data">
        {listdata.map((item) => (
          <div>
            <ShowList heading={item.heading} content={item.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
