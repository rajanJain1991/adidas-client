import React, { Component } from 'react';

import '../styles/search-bar.css';
import logo from '../styles/adidas_logo.png';
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
  }

  changeValue = option => {
    this.setState({ searchQuery: option.target.value });
  };

  handleExecuteSearch = model => {
    if (this.state.searchQuery.length > 0) {
      this.props.searchQuery(this.state.searchQuery);
    }
  };

  _handleKeyPress = e => {
    if (e.key === 'Enter') {
      if (this.state.searchQuery.length > 0) {
        this.props.searchQuery(this.state.searchQuery);
      }
    }
  };

  render() {
    let searchPanel = (
      <div className="searchBar z-depth-3">
        <div className="row">
          <div id="nav-logo" className="col offset-s4 m2">
            <img src={logo} className="logo" alt="logo_search" />
          </div>
          <div className="col offset-s2 m8 searchBox">
            <div className="col s9 m11">
              <input
                onChange={this.changeValue}
                value={this.state.searchQuery}
                style={{ padding: '0 0 0 10px' }}
                onKeyPress={this._handleKeyPress}
                autoFocus
              />
            </div>
            <div className="col s1">
              <a
                className="waves-effect waves-light btn"
                onClick={this.handleExecuteSearch}
              >
                <i className="material-icons">search</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div>
        <div>{searchPanel}</div>
      </div>
    );
  }
}

export default SearchBar;
