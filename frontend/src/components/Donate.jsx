import React from "react";
import donate_amic_meu from '../assets/images/donate_amic_meu.png';


const Donate = () => {
   

    return (
      <section className="twocolumnsFirstColumn marginBottonDonate">
          <div className="media">
                <div className="media-body twoColumn">
                    <h5 className="mt-0 mb-1">DONATE AND RECEIVE OUR BOOK</h5>
                    Every person who donates more than 10 euros to our organization through this page will be able to receive the book. The funds raised through these donations will be used to continue the activities of the Open Cultural Center in Greece.
                    <a href="https://openculturalcenter.org/es/producto/my-friend/"   target="_blank" rel="noreferrer"> You can buy the book here.</a>
                </div>
                <img className="ml-3 d-none d-sm-block" width="10%" src={donate_amic_meu} alt="Generic placeholder image" />
         </div>
         <div className = "btn-donate">
          <a className="boton" href="https://openculturalcenter.org/wp-content/uploads/2018/12/Amigo-Mio_Guia-Didactica.pdf"  target="_blank"  rel="noreferrer">Pedagogical guide</a>
          <a className="boton" href="https://openculturalcenter.org/es/producto/my-friend/"   target="_blank" rel="noreferrer">Donate and receive our book</a>
         </div>
     

      </section>
    );
  };
  
  export default Donate;