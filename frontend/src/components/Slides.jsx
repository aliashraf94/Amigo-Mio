import React, { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import slides_1 from '../assets/images/slides_1.JPG';
import slides_2 from '../assets/images/slides_2.png';
import slides_3 from '../assets/images/slides_3.png';
import slides_4 from '../assets/images/slides_4.png';
import slides_5 from '../assets/images/slides_5.png';
import slides_6 from '../assets/images/slides_6.png';


const images = [
    { url: slides_1 },
    { url: slides_3 },
    { url: slides_4 },
    { url: slides_5 },
    { url: slides_6 },
    { url: slides_2 }
  ];

  

  
  
   
  
  
  const Slides = () => {


    const [isDesktop, setDesktop] = useState(window.innerWidth > 600);

    const updateMedia = () => {
      setDesktop(window.innerWidth > 600);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });

    return (
      <div>
        <SimpleImageSlider
/*           depending on the current screen size the width and height will change their value.
 */          width={isDesktop ? '520px' : '320px'}
          height={isDesktop ? '400px' : '290px'}
          images={images}
          showBullets={true}
          showNavs={true}
          slideDuration = {0.5}
          startIndex = {2}
        />
      </div>
    );
  }

export default Slides;
