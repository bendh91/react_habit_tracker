import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    console.log('Navbar');
    return (
      <nav className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span className="navbar-title">Habit Tracker</span>
        <span className="navbar-counter">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
