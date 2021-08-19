import React, {useState, useEffect, useContext} from 'react';
import { AppContext } from '../context/AppContext';

const UserProfile = ()=> {
    // context
    let {currentUser} = useContext(AppContext);

    // state
    let [dataUser, setDataUser] = useState([]);

    // Api
    let API_USER = 'http://localhost:4000/user/userProfile';
    let API_C_NAME = 'http://localhost:4000/user/changeUsername';
    let API_C_EMAIL = 'http://localhost:4000/user/changeEmail';
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
            .then(data => setDataUser(data))
            .catch(err => console.error(err))
    }, []);
    console.log(dataUser)

    return (
        <>
            <div>
                <h2>{}</h2>
            </div>
        </>
    )
};

export default UserProfile;