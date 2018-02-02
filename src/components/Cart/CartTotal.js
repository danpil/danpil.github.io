import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { Row, Panel, Col, Badge } from 'react-bootstrap';

const enhance = compose(
  withHandlers({
    totalAmount: ({ cart }) => () => {
      return cart.reduce((acum, item) => {
        acum += item.price * item.units;
        return acum;
      }, 0);
    },
  }),
);

const CartTotal = ({ cart, totalAmount }) => {
  return (
    <Panel>
      <Row>
        <Col xs={12} sm={6}>
          <h4>
            TOTAL: <Badge pullRight>Price: INR {totalAmount(cart)}</Badge>
          </h4>
        </Col>
      </Row>
    </Panel>
  );
};

CartTotal.propTypes = {
  cart: PropTypes.array.isRequired,
  totalAmount: PropTypes.func.isRequired,
};

export default enhance(CartTotal);
