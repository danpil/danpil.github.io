import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { Row, Panel, Table } from 'react-bootstrap';

import CartItem from './CartItem';
import CartToral from './CartTotal';

const enhance = compose(
  withHandlers({
    handleDeleteFromCart: props => id => {
      props.deleteFromCart({ id });
    },
    handleDeductUnit: props => id => {
      let units = -1;
      props.updateItemUnits({ id, units });
    },
    handleAddUnit: props => id => {
      let units = 1;
      props.updateItemUnits({ id, units });
    },
  }),
);

const Cart = ({ cart, handleAddUnit, handleDeductUnit, handleDeleteFromCart, onClickSort }) => {
  return (
    <Row>
      <aside className="cart">
        <Panel className="cartList" header="Cart" bsStyle="primary">
          <Table striped bordered condensed={true} hover>
            <thead>
              <tr>
                <th>#</th>
                <th
                  onClick={e => {
                    onClickSort('title');
                  }}
                >
                  Name
                </th>
                <th
                  onClick={e => {
                    onClickSort('price');
                  }}
                >
                  Price
                </th>
                <th
                  onClick={e => {
                    onClickSort('units');
                  }}
                >
                  Units
                </th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(cartItem => {
                return (
                  <CartItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    handleAddUnit={handleAddUnit}
                    handleDeductUnit={handleDeductUnit}
                    handleDeleteFromCart={handleDeleteFromCart}
                  />
                );
              })}
            </tbody>
          </Table>
          <CartToral cart={cart} />
        </Panel>
      </aside>
    </Row>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleAddUnit: PropTypes.func.isRequired,
  handleDeductUnit: PropTypes.func.isRequired,
  handleDeleteFromCart: PropTypes.func.isRequired,
  onClickSort: PropTypes.func.isRequired,
};

export default enhance(Cart);
