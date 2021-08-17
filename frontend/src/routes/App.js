import React from "react";
import '../App.css';
import '../css/secctionMainBanner.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { AppProvider } from "../context/AppContext";
import Main from '../pages/Main';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Gallery from '../pages/Gallery';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
          <NavBar /> 
          <Switch>
              <Route exact path='/' component={Main}/>
              <Route exact path='/signup' component={SignUp}/>
              <Route exact path='/signin' component={SignIn}/>
              <Route exact path='/gallery' component={Gallery}/>
              <Route component={NotFound}/>
          </Switch>
          <Footer /> 
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
