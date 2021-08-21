import React from 'react';
import { Route } from 'react-router-dom';
import UserProfile from '../pages/UserProfile';
import NotFound from '../pages/NotFound';
import ChangeUserName from '../pages/ChangeUserName';
import ChangeUserEmail from '../pages/ChangeUserEmail';
import ChangeUserPassword from '../pages/ChangeUserPassword';
// import RegisterBook from '../pages/RegisterBook';

const PriveteRouters = ({isAuth})=> {
    return (

        <Route>
            {
                isAuth ? (
                     <>
                         <UserProfile exact path='/userProfile'/>
                         <ChangeUserName exact path='/changeUserName'/>
                         <ChangeUserEmail exact path='/chanceUserEmail'/>
                         <ChangeUserPassword exact path='/chanceUserPassword'/>
                     </>
                ) : ( 
                     <>
                         <NotFound  exact path='userProfile'/>
                         <NotFound exact path='changeUserName'/>
                     </>
                )
            }
        </Route>

       
    );
};

export default PriveteRouters;