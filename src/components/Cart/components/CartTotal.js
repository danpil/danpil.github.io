import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { Row, Panel, Col, Badge, Button } from 'react-bootstrap';

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

const CartTotal = ({ cart, totalAmount }, { createNotification }) => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
  };
  return (
    <Panel>
      <Row>
        <Col xs={12} sm={12} style={style}>
          <h4>
            TOTAL:{' '}
            <Badge pullRight style={{ margin: ' 0 30px' }}>
              Price: INR {totalAmount(cart)}
            </Badge>
          </h4>
          <Button
            onClick={() => {
              console.log(JSON.stringify(cart));
              createNotification('info', 'Save success!!!');
            }}
            bsSize="small"
            bsStyle="primary"
            style={{ width: '90px' }}
          >
            Save
          </Button>
        </Col>
      </Row>
    </Panel>
  );
};

CartTotal.propTypes = {
  cart: PropTypes.array.isRequired,
  totalAmount: PropTypes.func.isRequired,
};

CartTotal.contextTypes = {
  createNotification: PropTypes.func,
};

export default enhance(CartTotal);
