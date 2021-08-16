import React, {useState, useEffect, createContext} from 'react'

export const AppContext = createContext(null);

export const AuthContext = ({children})=> {
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <AppContext.Provider value={currentUser, setCurrentUser}>
            {children}
        </AppContext.Provider>
    )

    // useEffect(()=> {
    //     setCurrentUser(JSON.parse(localStorage.getItem(user.isAuth)))
    // }, []);


}

