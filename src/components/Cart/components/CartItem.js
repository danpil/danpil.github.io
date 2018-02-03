import React from 'react';
import PropTypes from 'prop-types';
import { Button, Label } from 'react-bootstrap';

const CartItem = ({ cartItem, handleAddUnit, handleDeductUnit, handleDeleteFromCart }, context) => {
  return (
    <tr>
      <td>{cartItem.id}</td>
      <td>
        <h5>{cartItem.title}</h5>
      </td>
      <td>{cartItem.price}</td>
      <td>
        <Label bsStyle="success"> {cartItem.units} </Label>
        &nbsp;
        <Button bsSize="small" onClick={() => handleAddUnit(cartItem.id)}>
          +
        </Button>
        <Button bsSize="small" onClick={() => handleDeductUnit(cartItem.id)}>
          -
        </Button>
      </td>
      <td>
        <Button onClick={() => handleDeleteFromCart(cartItem.id)} bsSize="small" bsStyle="danger">
          DEL
        </Button>
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  handleAddUnit: PropTypes.func.isRequired,
  handleDeductUnit: PropTypes.func.isRequired,
  handleDeleteFromCart: PropTypes.func.isRequired,
};

export default CartItem;
