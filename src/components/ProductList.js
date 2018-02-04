import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import {
  fetchProducts,
  addToWishlist,
  removeFromWishlist
} from '../actions/index';
import { bindActionCreators } from 'redux';
import Product from './Product';

class ProductList extends Component {
  productList = products => {
    let list = [];
    if (products.length === 0) {
      return (
        <div style={{ textAlign: 'center' }}>
          <h3>Please search the valid product!!!</h3>
        </div>
      );
    } else {
      products.forEach((product, index) => {
        list.push(
          <Product
            product={product}
            wishlist={this.props.wishlist}
            index={index}
            addToWishlist={this.props.addToWishlist}
            removeFromWishlist={this.props.removeFromWishlist}
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
        <SearchBar searchQuery={this.props.fetchProducts} />
        <div className="row" style={{ padding: '30px' }}>
          {this.props.loading ? (
            <div className="preloader-wrapper big active col offset-s5">
              <div className="spinner-layer" style={{ borderColor: 'black' }}>
                <div className="circle-clipper left">
                  <div className="circle" />
                </div>
                <div className="gap-patch">
                  <div className="circle" />
                </div>
                <div className="circle-clipper right">
                  <div className="circle" />
                </div>
              </div>
            </div>
          ) : (
            this.productList(this.props.products)
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.productReducer.products,
    loading: state.productReducer.loading,
    wishlist: state.wishlistReducer.wishlist
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchProducts,
      addToWishlist,
      removeFromWishlist
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
