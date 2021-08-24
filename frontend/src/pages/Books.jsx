import React, {useState, useEffect, useContext} from 'react';
import { AppContext } from '../context/AppContext';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import "../assets/styles/pages/books.css" 


let Books = ()=> {
    // context
    let {currentUser, buttonFavStatus, setDataBooksFavorites} = useContext(AppContext);
    // state
    let [books, setBooks] = useState([]);
    let [booksFavorites, setBooksFavorites] = useState([]);
    let [pressButton, setPressButton] = useState(false);
    // api 
    let API = "http://localhost:4000/user/allbooks";
    let API_FAVORITES = "http://localhost:4000/user/favorites/64";

    useEffect(()=> {
        fetch(API)
            .then(res => res.json())
            .then(data =>{ setBooks(data)})
            .catch(err => console.error(err.message))
    }, []);

    useEffect(()=> {
        fetch(API_FAVORITES)
            .then(res => res.json())
            .then(data =>{ setBooksFavorites(data) ; setDataBooksFavorites(data)})
            .catch(err => console.error(err.message))
    }, [buttonFavStatus]);

    return (
        <>              
           
            <center className="galery-center"><h1>Books</h1></center>    
            <main className="main__container">
                {
                    currentUser 
                    ?
                        <>  {booksFavorites.length > 0 ? 
                            (<Categories title="My list">
                            <Carousel>
                                <CarouselItem/>
                                    <CarouselItem  results={booksFavorites}  />
                                <CarouselItem/>
                            </Carousel>
                           </Categories>) 
                           :
                           
                           ( <h5 className = "container favoritesTitle" >
                            There are no favorites on your list.
                            <small className="text-muted"> Add a book to favorites!</small>
                        </h5>)
                          }
                           
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
                        </>
                    :    
                        <>
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
                        </>
                }
            </main>
        </>
    );
};

export default Books;