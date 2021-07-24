import React from "react";
import '../App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import NotFound from '../container/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
