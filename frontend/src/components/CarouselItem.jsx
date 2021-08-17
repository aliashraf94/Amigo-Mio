import React from 'react';
import '../assets/styles/components/carouselItem.css';

let CarouselItem = (props)=> { 

    return (
        <> 
     {props.results != undefined ?  

        
     (
      props.results.map((result, index )=> { 
        if (result.approved === true ){
          return  <div key={index}  className="carousel-item">
          <img className="carousel-item__img" src={result.image_url} alt=""  />
          <div className="carousel-item__details">
            <p className="carousel-item__details--title">{result.title}  </p>
            <p className="carousel-item__details--subtitle">Likes: {result.likes} </p>
          </div>
        </div>
        }
      })  
    ) 

     :
    (console.log("loading")       )}
         
        </>
    );
};

export default CarouselItem;