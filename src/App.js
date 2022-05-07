// import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import { ContactUs } from "./Contact-us";
import { Home } from "./Home";
import { AboutUs } from "./About-us";
import { Navbar } from "./Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </Router>{" "}
    </div>
  );
}

export default App;
