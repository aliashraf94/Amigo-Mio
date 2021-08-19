import React, {useState, useEffect} from 'react';


const PageBookDetails = (props) => {

/*   We use <Link to = {{pathname: '/ PageBookDetails', state: {foo: result}}}> 
  from CarouselItem.jsx and the way to share code from a <Link to = {} </Link> 
  is using const { book} = props.location.state */

    const {book} = props.location.state

      // state
      let [bookcomment, setbookComment] = useState([]);
  
      // api 
      let API = "http://localhost:4000/user/comments";
  
      useEffect(()=> {
          fetch(API)
              .then(res => res.json())
              .then(data =>{ setbookComment(data)})
              .catch(err => console.error(err.message))
      }, []);

    return (
    <div  className="">
     { console.log(bookcomment)}
        <img className="" src={book.image_url} alt=""  />
        <div className="">
          <p className="">{book.title}  </p>
          <p className="">Likes: {book.likes} </p>
          <h3>Description:</h3>
          <p className="">Descriptoin: {book.descriptoin} </p>
        </div>
        <br></br>
        <h3>Comments:</h3>
        <p>{bookcomment ?
          (bookcomment.map(bookcommentDetail => {
             if(bookcommentDetail.book_id == book.id)  {
                    return <div>
                              <p>{bookcommentDetail.comment}</p> 
                              <p>User: {bookcommentDetail.user_id}</p>
                          </div>
             }
           })) 
          :
          (<p>Loading...</p>)}</p>
      </div>
    )
};
  
  export default PageBookDetails;