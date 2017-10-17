import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="fa-component-header">
        <h1>Force App</h1>
        <h2>Access easily to Star Wars data</h2>
      </header>
    );
  }

}
export default Header;
