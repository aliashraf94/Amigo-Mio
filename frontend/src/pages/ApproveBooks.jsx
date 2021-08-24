import React, {useState, useEffect} from 'react';
// import { AppContext } from '../context/AppContext';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItemAdmin from '../components/CarouselItemAdmin';

const ApproveBooks = ()=> {
    
    //state
    let [allBooks, setAllBooks] = useState([]);
    // let [toApprove, setToApprove] = useState([]);
    // let [approved, setApproved] = useState([]);
    
    // api
    let API = "http://localhost:4000/user/allbooks";
    
    useEffect(()=> {
        fetch(API)
            .then(res => res.json())
            .then(data => setAllBooks(data))
            .catch(err => console.error(err));
    }, []);
    // console.log(allBooks)  
    
    // function
    let approved = id => {
        let appro = allBooks.map(book => {
            if(book.id === id) {
                book.approved = true
                return book
            }else {
                return book
            }
        });
        setAllBooks(appro)
    };

    let disApproved = id => {
        let disAppro = allBooks.map(book => {
            if(book.id === id) {
                book.approved = false;
                return book
            }else {
                return book
            }
        });
        // console.log(disAppro)
        setAllBooks(disAppro)
    }
    

    let notApproved =  allBooks.filter(book => book.approved === false);
    let isApproved = allBooks.filter(book => book.approved === true);

    return(
        <>
            <Categories title='Approved Books'>
                <Carousel>
                    {
                        isApproved.map((book, index) => {
                            return (
                                <CarouselItemAdmin key={index} book={book} isApproved={true} disApproved={disApproved}/>
                            )
                        })
                    }
                </Carousel>
            </Categories>
            <Categories title='Books To Approve'>
                <Carousel>
                    {
                        notApproved.map((book, index) => {
                            return (
                                <CarouselItemAdmin key={index} book={book} isApproved={false} approved={approved}/>
                            )
                        })
                    }
                </Carousel>
            </Categories>
        </>
    )
}

export default ApproveBooks;