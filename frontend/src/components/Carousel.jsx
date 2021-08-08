import React from 'react';
import '../assets/styles/components/carousel.css';

let Carousel = ({children})=> {

    return (
        <>
        <section class="carousel">
          <div class="carousel__container">
            {children}
          </div>
        </section>
        </>
    );
};

export default Carousel;