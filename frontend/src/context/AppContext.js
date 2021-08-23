import React, {useState, useEffect, createContext} from 'react'

export const AppContext = createContext();

export const AppProvider = ({children})=> {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);

    useEffect(()=> {
        setCurrentUser(JSON.parse(localStorage.getItem('user')))
    }, []);

    return (
        <AppContext.Provider value={{currentUser, isAdmin, setCurrentUser, setIsAdmin} }>
            {children}
        </AppContext.Provider>
    )



}

