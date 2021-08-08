import React from 'react';
import '../assets/styles/components/carouselItem.css';

let CarouselItem = ()=> {

    return (
        <>
            <div className="carousel-item">
              <img className="carousel-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
              <div className="carousel-item__details">
                <p className="carousel-item__details--title">Título descriptivo</p>
                <p className="carousel-item__details--subtitle">2019 16+</p>
              </div>
            </div>
        </>
    );
};

export default CarouselItem;