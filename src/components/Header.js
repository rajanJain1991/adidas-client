import React, { Component } from 'react';
import '../styles/header.css';
import logo from '../styles/browser_logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div>
            <Link to="/">
              <img src={logo} className="logo" alt="img_head" />
            </Link>
          </div>
        </div>
        <div className="navigation">
          <Link to="/wishlist" className=" menu">
            WishList
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
