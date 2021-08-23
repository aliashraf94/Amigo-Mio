import {useState, useEffect, useContext} from 'react';
import { AppContext } from '../context/AppContext';

const useInicitialState = (API_ALL_BOOKS, API_FAVORITE) => {
    // state
    const [initial, setInitial] = useState([]);

    // context
    let {currentUser} = useContext(AppContext);



    useEffect(()=> {
        fetch(API_ALL_BOOKS)
            .then(res => res.json())
            .then(data => setInitial(data))
            .catch(err => console.error(err));

        currentUser &&
            fetch(API_FAVORITE, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('jwt'))}`
                }
            })
            .then(res => res.json())
            .then(data => setInitial(initial.concat(data)))
            .catch(err => console.error(err));    
         
    }, [currentUser]);
    console.log(initial)
    return initial;
};

export default useInicitialState;