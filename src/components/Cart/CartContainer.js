import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Cart from './components/Cart';
import { getSortColByName, resetSort, SortInfo } from './../../utils/sortHelpers';

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { sortCols: [], rows: [] };
  }

  componentDidMount() {
    this.setState({
      sortCols: SortInfo.columns,
      rows: this.props.cart,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState, props) => {
      return { rows: nextProps.cart };
    });
  }

  onClickSort = colName => {
    let cols = this.state.sortCols;
    let col = getSortColByName(cols, colName);
    console.log(col);
    if (col.sort !== '') {
      if (col.sort === 'Asc') {
        col.sort = 'Desc';
      } else {
        col.sort = 'Asc';
      }
    } else {
      col.sort = 'Asc';
      resetSort(cols, colName);
    }

    let rows = this.state.rows;
    col.funcSort(rows);
    this.setState((prevState, props) => {
      return { sortCols: cols, rows: rows };
    });
  };

  render() {
    return (
      <Cart
        cart={this.state.rows}
        deleteFromCart={this.props.deleteFromCart}
        updateItemUnits={this.props.updateItemUnits}
        onClickSort={this.onClickSort}
      />
    );
  }
}

CartContainer.propTypes = {
  cart: PropTypes.array.isRequired,
  updateItemUnits: PropTypes.func.isRequired,
  deleteFromCart: PropTypes.func.isRequired,
};

export default CartContainer;
