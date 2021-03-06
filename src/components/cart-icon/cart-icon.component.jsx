import React from 'react';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

function CartIcon({ toggleCartHidden }) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

const mapStateToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapStateToProps)(CartIcon);
