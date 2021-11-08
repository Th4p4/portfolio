import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Profile from "./page/profile";

const App = () => {
  return (
    <React.Fragment>
    <Router>
      <Routes>
        <Route exact path="/" element = {<Profile/>}/>
      </Routes>
    </Router>
    </React.Fragment>
  );
};

export default App;
