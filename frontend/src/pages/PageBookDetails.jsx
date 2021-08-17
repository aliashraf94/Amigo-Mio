import React from 'react';


const PageBookDetails = (props) => {

/*   We use <Link to = {{pathname: '/ PageBookDetails', state: {foo: result}}}> 
  from CarouselItem.jsx and the way to share code from a <Link to = {} </Link> 
  is using const { book} = props.location.state */

    const {book} = props.location.state

    return (
      <> 
   {book != undefined ?  
   (
    <div  className="">
        <img className="" src={book.image_url} alt=""  />
        <div className="">
          <p className="">{book.title}  </p>
          <p className="">Likes: {book.likes} </p>
          <h3>Description:</h3>
          <p className="">Descriptoin: {book.descriptoin} </p>
        </div>
      </div>
  ) 
   :
  (console.log("loading"))}
      </>
  );
};
  
  export default PageBookDetails;