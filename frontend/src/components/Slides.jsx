import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import slides_1 from '../assets/images/slides_1.JPG';
import slides_2 from '../assets/images/slides_2.png';
import slides_3 from '../assets/images/slides_3.png';
import slides_4 from '../assets/images/slides_4.png';
import slides_5 from '../assets/images/slides_5.png';
import slides_6 from '../assets/images/slides_6.png';


const Slides = () => {

    return (
                    <AwesomeSlider>
                        <div data-src={slides_1} />
                        <div data-src={slides_2} />
                        <div data-src={slides_3} />
                        <div data-src={slides_4} />
                        <div data-src={slides_5} />
                        <div data-src={slides_6} />
                    </AwesomeSlider>
    );
};

export default Slides;
