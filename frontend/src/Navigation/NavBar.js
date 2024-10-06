import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg" style={{backgroundColor:"#006400"}}>
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link text-white" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="./quiz">Game Quiz</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="./post">Blogs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="./footprint">Carbon Footprint Calculaor</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
