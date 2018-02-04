import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromeWishlist } from '../actions/index';
import { bindActionCreators } from 'redux';
import WishListElement from './WishListElement';

class WishList extends Component {
  wishList = products => {
    let list = [];
    if (products.length === 0) {
      return (
        <div style={{ textAlign: 'center' }}>
          <h3>There is no item in wishlist!!</h3>
        </div>
      );
    } else {
      products.forEach((product, index) => {
        list.push(
          <WishListElement
            product={product}
            removeFromeWishlist={this.props.removeFromeWishlist}
            key={index}
          />
        );
      });
    }
    return list;
  };
  render() {
    return (
      <div className="container">
        <h4 style={{ padding: '10px' }}>Your Wishlist</h4>
        <div className="row" style={{ padding: '30px' }}>
          {this.wishList(this.props.wishlist)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wishlist: state.wishlistReducer.wishlist
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      removeFromeWishlist
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
