import React from 'react';
import { Grid, Row } from 'react-bootstrap';

import Products from './../components/Products';
import CartContainer from './../components/Cart/CartContainer';
import RequireCart from './../components/Cart';
import NotificationContainer from './../components/Notification';

const App = () => {
  const Cart = RequireCart(CartContainer);

  return (
    <Grid>
      <NotificationContainer>
        <Row>
          <h1>Shopping Cart : Redux</h1>
        </Row>
        <Cart />
        <Products />
      </NotificationContainer>
    </Grid>
  );
};

export default App;
