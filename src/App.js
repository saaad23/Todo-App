import React, { useState } from "react";
import NewList from "./components/NewList/NewList";
import "bootstrap/dist/css/bootstrap.min.css";
import { todoListData } from "./mockData/ListData";
import "./App.css";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="main-container">
      <Header />
    </div>
  );
};

export default App;
