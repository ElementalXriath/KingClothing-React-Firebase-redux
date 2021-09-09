import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import { CartDropDown } from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase.utils';

import './header.style.scss';

const Header = ({currentUser, hidden}) => (
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
      <CartIcon/>
    </div>
    {
      hidden ? null : <CartDropDown/>
    }
    
  </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);