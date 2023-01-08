import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/Authprovider';

const Header = () => {
    const { user,userLogOut } = useContext(AuthContext)
    const allMenus = <React.Fragment>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/home">About</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/home">Contact us</Link></li>

        {
            user && user.uid ? <><div className="avatar">
                <div className="w-12 m-2 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img alt='' src="https://placeimg.com/192/192/people" />
                </div>
            </div><button className='btn btn-primary mt-2 text-white' onClick={userLogOut}>LogOut</button></> : <><li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li></>
        }
        <li><Link to="/dashboard">Dashboard</Link></li>
    </React.Fragment>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {allMenus}
                    </ul>
                </div>
                <Link to="/home" className="btn btn-ghost normal-case text-xl">Doctors Chembers</Link>
            </div>
            <div className="navbar-end hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    {allMenus}
                </ul>
            </div>
        </div>
    );
};

export default Header;