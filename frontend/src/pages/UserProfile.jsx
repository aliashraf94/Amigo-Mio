import React, {useState, useEffect, useContext} from 'react';
import { AppContext } from '../context/AppContext';
import iconUser from '../assets/icons/icons-user.png';
import iconsChanges from '../assets/icons/icons-changes.png';
import iconsBook from '../assets/icons/icons-book.png'
import { Link } from 'react-router-dom';

const UserProfile = ()=> {
    // context
    let {currentUser} = useContext(AppContext);

    // state
    let [dataUser, setDataUser] = useState(null);

    // Api
    let API_USER = 'http://localhost:4000/user/userProfile';
    let API_C_PASSWORD = 'http://localhost:4000/user/changePassword';
    let API_ALL_USERS = 'http://localhost:4000/user/allusers';

    useEffect(()=> {
        fetch(API_USER, {
            method: 'Get',
            headers: {
                authorization: `Bearer ${JSON.parse(localStorage.getItem('jwt'))}`
            }
        })
            .then(res => res.json())
            .then(data => setDataUser(data[0]))
            .catch(err => console.error(err))
    }, [currentUser]); 
    // console.log(JSON.parse(localStorage.getItem('jwt')))

    return (
        <>
            <center><h1>Welcome to Amigo Mio</h1></center>
            {
                dataUser ? (
                    <>
                        <div>
                            <h4><img src={iconUser} alt="icon-user" width='30px' /> User Name: { dataUser.name}</h4>
                        </div>
                        <div>
                            <h4>User {dataUser.is_admin ? 'admin' : 'regular'}</h4>
                        </div>
                    </>
                ) : ( null )
            }
            <main>
                <center>
                    <section>
                        <h3>Register book <img src={iconsBook} alt="icons-book" /></h3>
                    </section>
                    <section>
                        <h3>Chance in your profile <img src={iconsChanges} alt="icons-changes" /></h3>
                        <ul>
                            <li><Link to='/changeUserName'>hangeName</Link></li>
                            <li><Link to='/changeUserEmail'>changeEmail</Link></li>
                            <li><Link to='/changeUserPassword'>changePassword</Link></li>
                        </ul>
                    </section>
                </center>
            </main>
        </>
    )
};

export default UserProfile;