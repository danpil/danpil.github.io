import React from 'react';
import { connect } from 'react-redux';
import { compose, branch, renderNothing } from 'recompose';

import CartUI from './Cart';
import Cart from './../../modules/Cart';

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

// deleteFromCart, updateItemUnits;

const mapDispatchToProps = dispatch => ({
  deleteFromCart(product) {
    dispatch(Cart.actions.deleteFromCart(product));
  },
  updateItemUnits(product) {
    dispatch(Cart.actions.updateItemUnits(product));
  },
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  branch(({ cart }) => {
    console.log(cart);
    return cart.length === 0;
  }, renderNothing),
);

const RequireCart = props => {
  return <CartUI {...props} />;
};

export default enhance(RequireCart);
