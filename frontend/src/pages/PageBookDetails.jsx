import React, {useState, useEffect,useContext} from 'react';
import { AppContext } from '../context/AppContext';
import FormBookComment from '../components/FormBookComment'
import getUserDetails from '../function/getUserDetails.js';

const PageBookDetails = (props) => {


   // context
   let {currentUser} = useContext(AppContext);
/*   We use <Link to = {{pathname: '/ PageBookDetails', state: {foo: result}}}> 
  from CarouselItem.jsx and the way to share code from a <Link to = {} </Link> 
  is using const { book} = props.location.state */

    const {book} = props.location.state

      // state
      let [userCommentDetails, setUserCommentDetails] = useState([]);
      let [inputComment, setInputComment] = useState([]);
      let [newComment, setNewComment] = useState([]);
      let [dataUser, setDataUser] = useState([]);

      // api fetch comments  
      let API_BOOKS_COMMENTS = `http://localhost:4000/user/booksCommentsUser/${book.id}`;
      let API_COMMENT_USER = 'http://localhost:4000/user/commentInsert'

        useEffect(()=> {
            fetch(API_BOOKS_COMMENTS)
                .then(res => res.json())
                .then(data =>{ setUserCommentDetails(data)}) 
                .catch(err => console.error(err.message))
        }, [newComment]);

  /* Getting data from the Form FormBookComment   */ 
  const GetPropsFormData = valores => {

    setInputComment(valores)
    
    /* Ensuring to obtain user information in the state */
    const validationUserInformation = async () =>{
      const requestAut = await  getUserDetails() 
      setDataUser(requestAut)
  }
  validationUserInformation()
  };

  const   fetchComments =  ()  => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id: dataUser[0].id, book_id:  book.id , comment: inputComment})
  };

  fetch(API_COMMENT_USER, requestOptions)
      .then(response => response.json())
      .then(data =>{ setNewComment(data) ; console.log(data)})
      .catch((error) => {
        console.error(error);
      });
    
  }

  useEffect(()=> {
    dataUser.length > 0 && fetchComments()
  }, [dataUser]);

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