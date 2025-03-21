import React, { useState } from 'react';

function Register() {

    const [userEntery, setUserEntery] = useState({ loginUserName: "", loginUserPassword: "" });
    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserEntery({ ...userEntery, [name]: value.toLowerCase().trim() })
    }
    const handleRegister = (event) => {
        event.preventDefault();
        console.log(userEntery);
    }


    return (
        <div className='container mt-5 rounded'>
            <h1>User Register</h1>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label htmlFor="registerUserName" className="form-label">Name</label>
                    <input className="form-control" type="text" id="registerUserName" name='registerUserName' aria-describedby="emailHelp" autoComplete="off" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input className="form-control" type="email" id="exampleInputEmail1" name='registerUserEmail' aria-describedby="emailHelp" autoComplete="off" onChange={handleInput} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input className="form-control" type="password" id="exampleInputPassword1" name='registerUserEmail' autoComplete="off" onChange={handleInput} />
                </div>
                <div className="mb-3 form-check">
                    <input className="form-check-input" type="checkbox" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">By continuing, I agree to the <a>Terms of Use</a> & <a>Privacy Policy</a></label>
                </div>
                <button type="submit" className="btn btn-primary">Register Now</button>
            </form>
        </div>



    )
}

export default Register;
