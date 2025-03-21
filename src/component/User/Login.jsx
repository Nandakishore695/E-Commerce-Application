import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from "../redux/slice.jsx"
import { useNavigate } from "react-router";

function Login() {
    const [userEntery, setUserEntery] = useState({ loginUserName: "", loginUserPassword: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserEntery({ ...userEntery, [name]: value.toLowerCase().trim() })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        dispatch(login());
        navigate("/product")
    }

    return (
        <div className='container mt-5 rounded '>
            <h1>User Login</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="loginUserName" className="form-label">Email address</label>
                    <input className="form-control" type="email" id="loginUserName" name='loginUserName' aria-describedby="emailHelp" autoComplete="off" onChange={handleInput} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="loginUserPassword" className="form-label">Password</label>
                    <input className="form-control" type="password" id="loginUserPassword" name='loginUserPassword' autoComplete="off" onChange={handleInput} />
                </div>
                <div className="mb-3 form-check">
                    <input className="form-check-input" type="checkbox" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">By continuing, I agree to the <a>Terms of Use</a> & <a>Privacy Policy</a></label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}
export default Login;