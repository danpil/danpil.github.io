import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import Product from './Product';

const Products = ({ products, addProductToCart }) => {
  return (
    <Row style={{ margin: '15px' }}>
      {products.map(p => {
        return (
          <Col className="productsList" xs={12} sm={6} md={4} key={p.id}>
            <Product handleOnAdd={addProductToCart} product={p} />
          </Col>
        );
      })}
    </Row>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

export default Products;
