import React from 'react';
import { connect } from 'react-redux';
import { branch, renderNothing, compose } from 'recompose';

import ProductsUI from './Products';
import Cart from './../../modules/Cart';

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = dispatch => ({
  addProductToCart(product) {
    dispatch(Cart.actions.addToCart(product));
  },
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  branch(({ products }) => {
    return products.length === 0;
  }, renderNothing),
);

const RequireProducts = props => {
  return <ProductsUI {...props} />;
};

export default enhance(RequireProducts);
