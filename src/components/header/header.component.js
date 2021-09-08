import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';


import { auth } from '../../firebase/firebase.utils';

import './header.style.scss';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='options' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className="options" onClick={() => auth.signOut()}>Sign Out</div>
        :
        <Link className="options" to="/signin">Sign Up</Link>
      }
    </div>
  </div>
);

export default Header;