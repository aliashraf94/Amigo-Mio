import React, {useState, useEffect, createContext} from 'react'

export const AppContext = createContext();

export const AppProvider = ({children})=> {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=> {
        setCurrentUser(JSON.parse(localStorage.getItem('user')))
    }, []);

    return (
        <AppContext.Provider value={{currentUser, setCurrentUser} }>
            {children}
        </AppContext.Provider>
    )



}

