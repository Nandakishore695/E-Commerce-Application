import React from 'react'
import { useNavigate } from "react-router";


const ShippingAddress = () => {
    const navigate = useNavigate();

    const handleAddressCollect = (event) => {
        event.preventDefault();

    }
    const handleCheckoutAddressPage = (event) => {
        event.preventDefault();
        navigate("/checkoutAddress")

    }

    return (
        <div className='container'>
            <h1>Shipping Address</h1>
            <form className='row' onSubmit={handleAddressCollect}>

                <div className="col-xl-3 mb-3">
                    <label htmlFor="loginUserName" className="form-label">Full Name</label>
                    <input className="form-control" type="email" id="loginUserName" name='loginUserName' aria-describedby="emailHelp" autoComplete="off" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="col-xl-3 mb-3">
                    <label htmlFor="loginUserPassword" className="form-label">Country</label>
                    <input className="form-control" type="password" id="loginUserPassword" name='loginUserPassword' autoComplete="off" />
                </div>
                <div className="col-xl-3 mb-3">
                    <label htmlFor="loginUserPassword" className="form-label">State</label>
                    <input className="form-control" type="password" id="loginUserPassword" name='loginUserPassword' autoComplete="off" />
                </div>
                <div className="col-xl-3 mb-3">
                    <label htmlFor="loginUserPassword" className="form-label">City</label>
                    <input className="form-control" type="password" id="loginUserPassword" name='loginUserPassword' autoComplete="off" />
                </div>
                <div className="col-xl-3 mb-3">
                    <label htmlFor="loginUserPassword" className="form-label">Pincode</label>
                    <input className="form-control" type="password" id="loginUserPassword" name='loginUserPassword' autoComplete="off" />
                </div>
                <div className="col-xl-3 mb-3">
                    <label htmlFor="loginUserPassword" className="form-label">PhoneNumber</label>
                    <input className="form-control" type="password" id="loginUserPassword" name='loginUserPassword' autoComplete="off" />
                </div>
                <div className="col-xl-3 mb-3">
                    <label htmlFor="loginUserPassword" className="form-label">Address/Nearby</label>
                    <input className="form-control" type="text-area" id="loginUserPassword" name='loginUserPassword' autoComplete="off" />
                </div>
                <div className='text-center'>
                    <div>

                        <button type="submit" className="btn btn-primary col-xl-3 mb-2" onClick={handleCheckoutAddressPage}>Submit </button></div>
                    <div>
                        <button type="submit" className="btn btn-primary col-xl-3 " onClick={handleCheckoutAddressPage}>Use Old Address</button></div>
                </div>
            </form>
        </div>
    )
}

export default ShippingAddress;
