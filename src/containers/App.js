import React from 'react';
import { Grid, Row } from 'react-bootstrap';

import Products from './../components/Products';
import Cart from './../components/Cart';

const App = ({ products }) => {
  return (
    <Grid>
      <Row>
        <h1>Shopping Cart : Redux</h1>
      </Row>
      <Cart />
      <Products />
    </Grid>
  );
};

export default App;
