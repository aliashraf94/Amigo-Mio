import React, {useState, useEffect,useContext} from 'react';
import { AppContext } from '../context/AppContext';
import FormBookComment from '../components/FormBookComment'


const PageBookDetails = (props) => {
  const [newComment, setNewComment] = useState([]);

   // context
   let {currentUser} = useContext(AppContext);
console.log(currentUser)
/*   We use <Link to = {{pathname: '/ PageBookDetails', state: {foo: result}}}> 
  from CarouselItem.jsx and the way to share code from a <Link to = {} </Link> 
  is using const { book} = props.location.state */

    const {book} = props.location.state

      // state
      let [userCommentDetails, setUserCommentDetails] = useState([]);
        // api fetch comments  
        let apiUsers = `http://localhost:4000/user/booksCommentsUser/${book.id}`;
  
        useEffect(()=> {
            fetch(apiUsers)
                .then(res => res.json())
                .then(data =>{ setUserCommentDetails(data)}) 
                .catch(err => console.error(err.message))
        }, [newComment]);

  /* Getting data from the Form FormBookComment   */ 
  const GetPropsFormData = valores => {

    let getuserInformation
    getuserInformation = localStorage.getItem('userInformation');
    let userInformation = JSON.parse(getuserInformation)
    setNewComment(valores)

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id: userInformation[0].id, book_id:  book.id , comment: valores})
  };
  fetch('http://localhost:4000/user/commentInsert', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error(error);
      });
   
  };

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
        <h3>{userCommentDetails.length >= 1   ?  ("Comments") : ("No comments have been made, be the first to comment on this book!") }</h3> 
        <div>{userCommentDetails ?
              (userCommentDetails.map((bookcommentDetail, index) => {
                        return <div key={index}>
                                  <p>-------------------------------------------------</p>
                                  <h5>User</h5>
                                  <p> {bookcommentDetail.name}</p>
                                  <h5>Comment:</h5>
                                  <p> {bookcommentDetail.comment}</p> 
                                  <p>-------------------------------------------------</p>
                                  {console.log(currentUser)}
                              </div>
              })) 
              :
              (<span>Loading...</span>)}
         </div>
      {   currentUser &&  <FormBookComment sendFuntion={GetPropsFormData} />}
      </div>
    )
};
  
  export default PageBookDetails;