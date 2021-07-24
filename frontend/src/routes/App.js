import React from "react";
import '../App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import SignUp from '../components/SignUp';
import SignIn from "../components/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/signin' component={SignIn}/>
    </BrowserRouter>
  );
}

export default App;
