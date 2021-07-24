import React from "react";
import tree from '../assets/tree.png';
import art_person from '../assets/art_person.png';
import amigo_mio from '../assets/amigo_mio.png';

const SectionMainBanner = () => {
   

    return (
      
      <header>
        <div className="container-fluid">
          <div className="contenido">
            <img className="element-animation tree-img img-fluid float-left"
                src={tree}> 
            </img>
            <img className="element-animation2 art-person-img img-fluid  float-left"
                src={art_person} > 
            </img>
            <img className="element-animation3 amigomio-img img-fluid  float-left"
                src={amigo_mio} > 
            </img>
          </div>
        </div>
      </header>
    );
  };
  
  export default SectionMainBanner;