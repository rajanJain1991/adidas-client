import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from './ProductList';
import WishList from './WishList';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={ProductList} />
            <Route exact path="/wishlist" component={WishList} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
