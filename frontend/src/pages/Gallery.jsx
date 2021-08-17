import React, {useState, useEffect} from 'react';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import "../assets/styles/components/Gallery.css"




let Gallery = ()=> {
    // state
    let [books, setBooks] = useState([]);

    // api 
    let API = "http://localhost:4000/user/allbooks";

    useEffect(()=> {
        fetch(API)
            .then(res => res.json())
            .then(data =>{ setBooks(data)})
            .catch(err => console.error(err.message))
    }, []);
    
    return (
        <>
            <center className="galery-center"><h1>Gallery</h1></center>    
            <main className="main__container">
                <Categories title="My list">
                    <Carousel>
                        <CarouselItem/>
                        <CarouselItem/>
                    </Carousel>
                </Categories>
                <Categories title="All books">
                    <Carousel>
                            <CarouselItem  results={books}  />
                    </Carousel>
                </Categories>
                <Categories title="Trend">
                    <Carousel>
                        <CarouselItem/>
                        <CarouselItem/>
                    </Carousel>
                </Categories>
            </main>
        </>
    );
};

export default Gallery;