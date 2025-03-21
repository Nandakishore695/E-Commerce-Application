import React from 'react'
import { NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from './component/redux/slice';
import logo from "../src/assets/logo-icon.png";


function Layout() {
    const count = useSelector((state) => state.login?.value);
    const cart = useSelector((state) => state.login?.cartValue);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {dispatch(logout());}
    const handleLogoHome = () => {navigate("/product");}
    const handleProfile = () => {navigate("/profile")}

    return (
        <>
            <header className=' container-fluid bg-success'>
                <nav className='navbar navbar-expand-lg' >
                    <ul className='container d-flex list-unstyled text-decoration-none mt-2 '>
                        <li><img src={logo} width={150} onClick={handleLogoHome} /></li>
                        <li ><NavLink className="text-decoration-none text-white" to="/product">Show All</NavLink></li>
                        <li>About</li>
                        <li><input className='p-2 rounded' type='search' name="productSearch" placeholder='Search for any brand' /></li>
                        {!count ? <>
                            <li><NavLink to="/login" className='bg-primary p-3 rounded text-white text-decoration-none' href='/login'>login</NavLink></li>
                            <li><NavLink to="/register" className='bg-primary p-3 rounded text-white text-decoration-none'>register</NavLink></li> </>
                            : <>
                                <li><NavLink to="/cart" className='bg-primary p-3 rounded text-white text-decoration-none position-relative '>Bag
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cart}</span>
                                </NavLink></li>
                                <li><button className='bg-primary p-3 rounded text-white text-decoration-none' onClick={handleProfile}>Profile</button></li>
                                <li><button className='bg-primary p-3 rounded text-white text-decoration-none' onClick={handleLogout}>Logout</button></li>
                            </>
                        }
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Layout