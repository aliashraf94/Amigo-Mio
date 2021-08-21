import React from 'react';
import { Route } from 'react-router-dom';
import UserProfile from '../pages/UserProfile';
import NotFound from '../pages/NotFound';

const PriveteRouters = ({isAuth})=> {
    return (
       <Route>
           {
               isAuth ? (
                    <>
                        <UserProfile exact path='userProfile'/>
                    </>
               ) : ( 
                    <>
                        <NotFound exact path='userProfile'/>
                    </>
               )
           }
       </Route>
    );
};

export default PriveteRouters;