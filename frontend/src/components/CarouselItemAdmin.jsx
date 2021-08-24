import React from 'react';
import '../assets/styles/components/carouselItemAdmin.css';
import iconsDeleteBook from '../assets/icons/icons-delete-book.png';
import iconsAddBook from '../assets/icons/icons-add-book.png';
import iconsRemoveBook from '../assets/icons/icons-remove-book.png';
// import PageBookDetails from '../pages/PageBookDetails'
// import {Link} from 'react-router-dom';


let CarouselItemAdmin = (props)=> { 
    // props
    let {book, isApproved, approved, disApproved} = props

    // api
    const API_CHANGE_APPROVED = 'http://localhost:4000/user/changeApproval';

    // function
    const updateApprovedDB = (id, approved) => {
        fetch(API_CHANGE_APPROVED, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${JSON.parse(localStorage.getItem('jwt'))}`
            },
            body: JSON.stringify({id:id, approved: approved})
        })
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.log(err))
    }

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
                            onClick={()=> {
                                disApproved(book.id)
                                updateApprovedDB(book.id, false)
                            }}
                        />
                      ) : (
                        <img
                            className="carousel-item__details--img" 
                            src={iconsAddBook} 
                            alt="Add Icon" 
                            onClick={()=> {
                                approved(book.id)
                                updateApprovedDB(book.id, true)
                            }}
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