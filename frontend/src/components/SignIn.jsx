import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const SignIn = ()=> {
    //state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setState = [setEmail, setPassword];

    //Api
    const API = '';

    //funtions 
    const handleOnChange = event => {
        let id = event.target.id;
        let value = event.target.value;

        switch (id) {
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value)
                break;    
            default:
                console.error('id does not exist')
                break;
        };
    };

    const handleOnSubmit = event => {
        event.preventDefault();

        const user = {
            "email": email,
            "password": password
        };
        // console.log(user)
        fetch(API, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.isAuthenticated) {
                alert('Login successfully')
            }else {
                alert(data.messageError)
            }
        });

        setState.forEach(state => state(""));
    }

    return(
        <main className="main-sign-up">
            <div className="div-sign-up">
                <center><h1>Login</h1></center>
                <form onSubmit={handleOnSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">Email</label>
                        <input onChange={handleOnChange} type="email" 
                            className="form-control" id="email" placeholder="email@email.com" 
                            value={email} autoComplete="on"/>
                    </div>
                    <div className="mb-5">
                        <label  className="form-label">Password</label>
                        <input onChange={handleOnChange} type="password" 
                            className="form-control" id="password" placeholder="passsword" 
                            value={password} autoComplete="on"/>
                    </div>
                    <div className="mb-4">
                        <button className="btn btn-primary form-control" type="submit">Submit</button>
                    </div>
                    <div className="mb-3">
                        <center>Don't have an acount? <Link to="/register">Sign up</Link></center>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default SignIn;

