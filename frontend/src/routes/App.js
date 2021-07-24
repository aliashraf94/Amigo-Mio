import React from "react";
import '../App.css';
import '../css/secctionMainBanner.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SectionMainBanner from '../container/SectionMainBanner';
import SignUp from '../container/SignUp';
import SignIn from '../container/SignIn';
import NotFound from '../container/NotFound';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function App() {
  return (
    <BrowserRouter>
        <NavBar /> 
        <Switch>
            <Route exact path='/' component={SectionMainBanner}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/signin' component={SignIn}/>
            <Route component={NotFound}/>
        </Switch>
        <Footer /> 
    </BrowserRouter>
  );
}

export default App;
