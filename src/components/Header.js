import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
const Header = () => (
  
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  </header>
  
);

export default Header;
