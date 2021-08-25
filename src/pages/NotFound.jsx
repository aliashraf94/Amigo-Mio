import React from 'react';
import { Link } from 'react-router-dom';
// import '../assets/styles/pages/notFound.css';
import cienciaFicción from '../assets/icons/icons-ciencia-ficción.png';

const NotFound = () => (
    <>
        <center>
            <div className='not-found'>
                <div className='not-found_h1'>
                    <h1>404 Page Not Found</h1>
                </div>
                <main className='not-found_img'>
                    <img src={cienciaFicción} alt="ciencia-ficción" height='500px' width='500px'/>
                </main>
                <Link to='/'><strong>Go to home!!!</strong></Link>
            </div>
        </center>
    </>
);

export default NotFound;