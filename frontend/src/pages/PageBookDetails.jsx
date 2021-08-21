import React, {useState, useEffect} from 'react';


const PageBookDetails = (props) => {

/*   We use <Link to = {{pathname: '/ PageBookDetails', state: {foo: result}}}> 
  from CarouselItem.jsx and the way to share code from a <Link to = {} </Link> 
  is using const { book} = props.location.state */

    const {book} = props.location.state

      // state
      let [bookcomment, setbookComment] = useState([]);
      let [userCommentDetails, setUserCommentDetails] = useState([]);
  
        // api fetch comments  
        let apiUsers = `http://localhost:4000/user/booksCommentsUser/${book.id}`;
  
        useEffect(()=> {
            fetch(apiUsers)
                .then(res => res.json())
                .then(data =>{ setUserCommentDetails(data)}) 
                .catch(err => console.error(err.message))
        }, []);




    return (
    <div  className="">
        <img className="" src={book.image_url} alt=""  />
        <div className="">
          <p className="">{book.title}  </p>
          <p className="">Likes: {book.likes} </p>
          <h3>Description:</h3>
          <p className="">Descriptoin: {book.descriptoin} </p>
        </div>
        <br></br>
        <h3>Comments:</h3>
        <div>{userCommentDetails ?
              (userCommentDetails.map((bookcommentDetail, index) => {
                        return <div key={index}>
                                  <p>-------------------------------------------------</p>
                                  <h5>User</h5>
                                  <p> {bookcommentDetail.name}</p>
                                  <h5>Comment:</h5>
                                  <p> {bookcommentDetail.comment}</p> 
                                  <p>-------------------------------------------------</p>
                              </div>
              })) 
              :
              (<span>Loading...</span>)}
         </div>
      </div>
    )
};
  
  export default PageBookDetails;