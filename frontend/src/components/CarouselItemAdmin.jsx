import React from 'react';
import '../assets/styles/components/carouselItemAdmin.css';
import iconsDeleteBook from '../assets/icons/icons-delete-book.png';
import iconsAddBook from '../assets/icons/icons-add-book.png';
import iconsRemoveBook from '../assets/icons/icons-remove-book.png';
// import PageBookDetails from '../pages/PageBookDetails'
// import {Link} from 'react-router-dom';


let CarouselItemAdmin = (props)=> { 
    let {book, isApproved, approved, disApproved} = props

    return (
        <div className="carousel-item">
          <img className="carousel-item__img" src={book.image_url} alt="image"  />
          <div className="carousel-item__details">
              <div>
                  {
                      isApproved ? (
                        <img
                            className="carousel-item__details--img" 
                            src={iconsRemoveBook} 
                            alt="Remove Icon" 
                            onClick={()=> disApproved(book.id)}
                        />
                      ) : (
                        <img
                            className="carousel-item__details--img" 
                            src={iconsAddBook} 
                            alt="Add Icon" 
                            onClick={()=> approved(book.id)}
                        />
                      )
                  }
                  <img 
                    className="carousel-item__details--img" 
                    src={iconsDeleteBook} 
                    alt="Delete Icon" 
                  />
              </div>
              <div>
                  <p className="carousel-item__details--title">{book.title}  </p>
                  <p className="carousel-item__details--subtitle">Likes: {book.likes} </p> */
                  {/* {/* <span className=""  ></span><Link to={{ pathname: '/PageBookDetails', state: { book: books} }}>See book details</Link> */}
              </div>
          </div>
        </div>
    );
};

export default CarouselItemAdmin;