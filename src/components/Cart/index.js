import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cart from './../../modules/Cart';

export default ChildComponent => {
  class RequireCart extends Component {
    render() {
      if (this.props.cart.length === 0) {
        return null;
      }
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      cart: state.cart,
    };
  };

  const mapDispatchToProps = dispatch => ({
    deleteFromCart(product) {
      dispatch(Cart.actions.deleteFromCart(product));
    },
    updateItemUnits(product) {
      dispatch(Cart.actions.updateItemUnits(product));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(RequireCart);
};
