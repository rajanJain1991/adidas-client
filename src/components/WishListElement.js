import React, { Component } from 'react';
import '../styles/wishlist-element.css';
import ReactStars from 'react-stars';

class WishListElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: Math.random()
    };
  }
  render() {
    let product = this.props.product;
    return (
      <div
        className="product"
        id={this.props.index}
        tabIndex={this.props.index}
        key={this.state.key}
      >
        <div className="row" style={{ margin: '0px' }}>
          <div className="col offset-s4">
            <img src={product.image} className="logo" alt="logo_main" />
          </div>
          <div style={{ float: 'right', margin: '10px' }}>
            <a
              className="wishlist tooltip"
              onClick={() => {
                this.props.removeFromeWishlist(product);
                this.setState({ key: Math.random() });
              }}
            >
              <i className="material-icons close">close</i>
              <span className="tooltiptext">Remove from wishlist</span>
            </a>
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

export default WishListElement;
