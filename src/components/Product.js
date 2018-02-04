import React, { Component } from 'react';
import '../styles/product.css';
import ReactStars from 'react-stars';
import whishlistIcon from '../styles/wishlist_icon.png';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: Math.random()
    };
  }
  render() {
    let product = this.props.product;
    let inWishlist =
      this.props.wishlist.filter(wp => wp.suggestion === product.suggestion)
        .length > 0;
    return (
      <div
        className="product"
        id={this.props.index}
        tabIndex={this.props.index}
        key={this.state.key}
      >
        <div className="row" style={{ margin: '0px' }}>
          <div className="col offset-s4">
            <img src={product.image} className="logo" alt="pro_img" />
          </div>
          <div style={{ float: 'right', margin: '10px' }}>
            {inWishlist ? (
              <a>In wishlist</a>
            ) : (
              <a
                className="wishlist tooltip"
                onClick={() => {
                  this.props.addToWishlist(product);
                  this.setState({ key: Math.random() });
                }}
              >
                <img src={whishlistIcon} className="logo" alt="wish_img" />
                <span className="tooltiptext">Add to wihlist</span>
              </a>
            )}
          </div>
          <div className="col s10 product-info">
            <div className="subtitle">{product.subTitle}</div>
            <div className="suggestion">
              <a target="_blank" href={product.url} style={{ color: 'black' }}>
                {product.suggestion}
              </a>
            </div>
            <div>{product.salePrice}</div>
            {product.rating > 0 ? (
              <div className="row">
                <div className="col s5">
                  <ReactStars
                    value={Number(product.rating)}
                    size={16}
                    edit={false}
                  />{' '}
                </div>
                <div>{product.reviews + ' reviews'}</div>
              </div>
            ) : (
              <div>No Reviews</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
