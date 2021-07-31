import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Amigo Mío</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link"  ><Link to="/">Home</Link> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  ><Link to="/SignIn">Login</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" ><Link to="/SignUp">Register</Link></a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
      

    );
  };
  
  export default NavBar;
