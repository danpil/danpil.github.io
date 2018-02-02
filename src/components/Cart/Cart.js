import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { Row, Panel } from 'react-bootstrap';

import CartItem from './CartItem';

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

// const Cart = ({ cart, handleAddUnit, handleDeductUnit, handleDeleteFromCart }) => {
//   return (
//     <Row>
//       <aside className="cart">
//         <Panel className="cartList" header="Cart" bsStyle="primary">
//           {cart.map(cartItem => {
//             return (
//               <CartItem
//                 key={cartItem.id}
//                 cartItem={cartItem}
//                 onAddUnit={handleAddUnit(cartItem.id)}
//                 onDeductUnit={handleDeductUnit(cartItem.id)}
//                 handleDeleteFromCart={handleDeleteFromCart(cartItem.id)}
//               />
//             );
//           })}
//         </Panel>
//       </aside>
//     </Row>
//   );
// };

const Cart = ({ cart, handleAddUnit, handleDeductUnit, handleDeleteFromCart }) => {
  return (
    <Row>
      <aside className="cart">
        <Panel className="cartList" header="Cart" bsStyle="primary">
          {cart.map(cartItem => {
            return (
              <CartItem
                key={cartItem.id}
                cartItem={cartItem}
                onAddUnit={handleAddUnit}
                onDeductUnit={handleDeductUnit}
                handleDeleteFromCart={handleDeleteFromCart}
              />
            );
          })}
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
};

export default enhance(Cart);
