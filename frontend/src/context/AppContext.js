import React, {useState, useEffect, createContext} from 'react'

export const AppContext = createContext();

export const AppProvider = ({children})=> {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);
    const [allBooks, setAllBooks] = useState(null);

    useEffect(()=> {
        setCurrentUser(JSON.parse(localStorage.getItem('user')))
    }, []);

    return (
        <AppContext.Provider value={{
            currentUser, 
            isAdmin, 
            allBooks,
            setCurrentUser, 
            setIsAdmin,
            setAllBooks
        }}>
            {children}
        </AppContext.Provider>
    )



}

