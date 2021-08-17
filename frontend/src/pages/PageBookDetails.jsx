import React from 'react';


const PageBookDetails = (props) => {

/*   We use <Link to = {{pathname: '/ PageBookDetails', state: {foo: result}}}> 
  from CarouselItem.jsx and the way to share code from a <Link to = {} </Link> 
  is using const { book} = props.location.state */

    const {book} = props.location.state

    return (
      <> 
   {foo != undefined ?  

      
   (
    <div  className="">
        <img className="" src={book.image_url} alt=""  />
        <div className="">
          <p className="">{foo.title}  </p>
          <p className="">Likes: {foo.likes} </p>
        </div>
      </div>
    
  
  ) 

   :
  (console.log("loading")       )}
       
      </>
  );
};
  
  export default PageBookDetails;