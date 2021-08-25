import React, {useState, useEffect, createContext} from 'react'

export const AppContext = createContext();

export const AppProvider = ({children})=> {
    const [currentUser, setCurrentUser] = useState(null);
    const [buttonFavStatus, setSuttonFavStatus] = useState(null);
    const [dataBooksFavorites, setDataBooksFavorites] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);
    useEffect(()=> {
        setCurrentUser(JSON.parse(localStorage.getItem('user')))
    }, []);

    return (
        <AppContext.Provider value={{
            buttonFavStatus,
           currentUser,
           dataBooksFavorites,
           isAdmin,
           setIsAdmin,
           setCurrentUser,
          setSuttonFavStatus,
          setDataBooksFavorites
         }}>
            {children}
        </AppContext.Provider>
    )



}

