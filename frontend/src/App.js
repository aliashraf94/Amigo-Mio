import React from "react";
import Header from './Header.js';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/* function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Footer />
      <SignIn />
      <SignUp />
    </div> 
  );
}; */


export default function App() {
  return (
    <Router>
              
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/SignIn">
           <SignIn /> 
          </Route>
          <Route path="/SignUp">
           <SignUp /> 
          </Route>
          <Route path="/">
           <NavBar /> 
            <Header /> 
            <Footer /> 
          </Route>
        </Switch>
    </Router>
  );
}

