import React, { useContext } from "react";
import '../App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../pages/Main';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Gallery from '../pages/Gallery';
import PageBookDetails from '../pages/PageBookDetails';
import PriveteRouters from "./PriveteRouters";
import { AppContext } from "../context/AppContext";

function App() {
  // context
  let { currentUser } = useContext(AppContext)

  return (
      <BrowserRouter>
          <NavBar /> 
          <Switch>
              <Route exact path='/' component={Main}/>
              <Route exact path='/signup' component={SignUp}/>
              <Route exact path='/signin' component={SignIn}/>
              <Route exact path='/gallery' component={Gallery}/>
              <Route exact path='/PageBookDetails' component={PageBookDetails}/>
              <PriveteRouters isAuth={currentUser}/>
              <Route component={NotFound}/>
          </Switch>
          <Footer /> 
      </BrowserRouter>
  );
}

export default App;
