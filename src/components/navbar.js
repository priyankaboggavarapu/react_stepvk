import React, { Component } from 'react';

class NavBar extends Component {
    constructor() {
        super();
    }
    componentWillReceiveProps(){
      console.log("New Prop Received");
    }
    render(){
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#">{this.props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/products">Products</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Cart {this.props.cartItems.length}</a>
      </li>
    </ul>
    
  </div>
</nav>
        )
    }
}

export default NavBar;