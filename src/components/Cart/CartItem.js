import React from 'react';
import { Col, Row, Panel, Button, Label, Badge } from 'react-bootstrap';

const CartItem = ({ cartItem, onAddUnit, onDeductUnit, handleDeleteFromCart }) => {
  return (
    <Panel className="cartItem">
      <Row>
        <Col xs={12} sm={6}>
          <h5>
            {cartItem.title} <Badge pullRight>Price: INR {cartItem.price}</Badge>
          </h5>
        </Col>
        <Col xs={6} sm={4}>
          <p>
            units :&nbsp;
            <Label bsStyle="success"> {cartItem.units} </Label>
            &nbsp;
            <Button bsSize="small" onClick={() => onAddUnit(cartItem.id)}>
              +
            </Button>
            <Button bsSize="small" onClick={() => onDeductUnit(cartItem.id)}>
              -
            </Button>
          </p>
        </Col>
        <Col xs={6} sm={2}>
          <Button onClick={() => handleDeleteFromCart(cartItem.id)} bsSize="small" bsStyle="danger">
            DEL
          </Button>
        </Col>
      </Row>
    </Panel>
  );
};

export default CartItem;
