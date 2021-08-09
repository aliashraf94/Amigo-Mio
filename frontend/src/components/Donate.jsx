import React from "react";
import donate_amic_meu from '../assets/images/donate_amic_meu.png';
import { Link } from 'react-router-dom';

const Donate = () => {
   

    return (
      <section className="twocolumnsFirstColumn marginBottonDonate">
          <div className="media">
                <div className="media-body twoColumn">
                    <h5 className="mt-0 mb-1">DONATE AND RECEIVE OUR BOOK</h5>
                    Every person who donates more than 10 euros to our organization through this page will be able to receive the book. The funds raised through these donations will be used to continue the activities of the Open Cultural Center in Greece.
                </div>
                <img className="ml-3 d-none d-sm-block" width="10%" src={donate_amic_meu} alt="Generic placeholder donate" />
         </div>
         <div className = "btn-donate">
          <Link className="boton" rel="noopener noreferrer" to={{  pathname: "https://openculturalcenter.org/wp-content/uploads/2018/12/Amigo-Mio_Guia-Didactica.pdf" }}   target="_blank">Pedagogical guide</Link>
          <Link className="boton" rel="noopener noreferrer" to={{  pathname: "https://openculturalcenter.org/es/producto/my-friend/" }}target="_blank">Donate and receive our book</Link>
         </div>
     

      </section>
    );
  };
  
  export default Donate;