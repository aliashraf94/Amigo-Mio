import React from "react";
import tree from '../assets/images/tree.png';
import art_person from '../assets/images/art_person.png';
import amigo_mio from '../assets/images/amigo_mio.png';

const SectionMainBanner = () => {
   

    return (
      
      <header>
        <div className="container-fluid">
          <div className="contenido">
            <div className="backgroundMain" >
            <div className="cuadroparatextos">
                  <h1>Welcome to Amigo Mío</h1>
                  <h4>An awareness tool for the population</h4>
                  <a className="boton" href="#section">Learn More</a>
            </div>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default SectionMainBanner;