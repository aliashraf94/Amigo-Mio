import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import {AppContext} from '../context/AppContext'


const NavBar = () => {
  let {currentUser, setCurrentUser} = useContext(AppContext)
  
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid">
          <h3 className="navbar-brand" >Amigo Mío</h3>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <div className=" collapse navbar-collapse  " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item active ">
                <span className="nav-link" ></span>  <Link  to="/">Home</Link> <span className="sr-only">(current)</span>
              </li>
              <li className="nav-item">
                <span className="nav-link"  ></span><Link to="/Gallery">Gallery</Link>
              </li>
              {
                currentUser 
                ? 
                  <li className="nav-item">
                    <span className="nav-link" ></span><Link to="/" onClick = {()=> {
                      localStorage.removeItem('user')
                      setCurrentUser(JSON.parse(localStorage.getItem('user')))
                    }}>Profile</Link>
                  </li>
                :
                  <>
                  <li className="nav-item">
                    <span className="nav-link" ></span><Link to="/SignIn">Login</Link>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link"  ></span><Link to="/SignUp">Register</Link>
                  </li>
                  </>
              }
            </ul>
          </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
