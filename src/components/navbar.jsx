import React, { Component } from 'react';
import Pricing from "./pages/pricing"
import Features from "./pages/features"

class NavBar extends Component {

    render() { 
        return (

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar {this.props.totalCounters} 
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/components/pages/features">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/components/pages/pricing">Pricing</a>
      </li>
    </ul>
  </div>
</nav>

        );
    }
}
 
export default NavBar;