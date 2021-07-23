import React from "react";
import { useHistory } from "react-router-dom";


const NavBar = () => {

  let history = useHistory();
  useHistory();
  
   
  const home = () =>{
    history.replace("/");
  }

  const signIn = () =>{
    history.replace("/SignIn");
  }

  const signUp = () =>{
    history.replace("/signUp");
  }

 
   

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Amigo Mio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" onClick={home} >Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onClick={signIn} >Sign-in</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onClick={signUp}>Sign-up</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
      

    );
  };
  
  export default NavBar;
