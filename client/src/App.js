import React, { Component, Fragment } from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
//import { createGlobalStyle } from "styled-components";
import './App.css';


import Home from "./components/Home.js";
import Jokes from "./components/Jokes.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
        <h1>Joke Retriever</h1>
        <li className='app-link'>
        <NavLink to="/api/login">
        <button>Signin</button>
        </NavLink>
        </li>
        <div className='app'>"
        {/* <Home />
        <Jokes /> */}
        <Route path="/api/login" render={() => <Login {...this.props} />} />
          {/* <Register /> */}
            </div>
        </header>
        </React.Fragment>
    );
  }
}

export default App;
