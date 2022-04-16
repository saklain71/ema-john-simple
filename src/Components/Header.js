import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../src/images/Logo.svg'
import auth from '../firebase.init';
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const SignOut = () => {
    signOut(auth);
    navigate('/login');
  };
    return (
       <nav className='header'>
           <img src={logo} alt="" />
         <div>
           <Link to="/shop">Shop</Link>
           <Link to="/orders">Orders</Link>
           <Link to="/inventory">Inventory</Link>
           <Link to="/about">About</Link>

           {
             user ? 
             <button onClick={SignOut} style ={ {margin : "0 5px"}}>Sign Out</button>:
             
             <Link to="/login">Login</Link> 
           }

        
         </div>
       </nav>
    );
};

export default Header;