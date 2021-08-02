import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <a className="navbar-brand" href="#">Amigo Mío</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className=" collapse navbar-collapse  " id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ">
      <li className="nav-item active ">
        <a className="nav-link"  ><Link to="/">Home</Link> <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"  ><Link to="/SignIn">Login</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" ><Link to="/SignUp">Register</Link></a>
      </li>
    </ul>
  </div>
</nav>
      

    );
  };
  
  export default NavBar;
