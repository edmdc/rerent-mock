import * as React from 'react';
import { Link } from 'gatsby';

const Header = (): JSX.Element => {
  return (
    <header>
      <div>
        <a href="#how">How it Works</a>
       </div>
       <nav>
         <Link to="/login">Login</Link>
         <Link to="/register">Register</Link>
       </nav>
    </header>
  )
};

export default Header;