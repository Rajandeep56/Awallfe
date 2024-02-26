import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../output.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-black py-4">
      <nav className="flex justify-center">
        <ul className="flex">
          <li className="mr-4">
            <Link to="/" className={`text-white hover:text-gray-300 ${location.pathname === '/' ? 'text-blue-500' : ''} font-sans text-xl font-bold`}>Home</Link>
          </li>
          <li className="mr-4">
            <Link to="/create-post" className={`text-white hover:text-gray-300 ${location.pathname === '/create-post' ? 'text-blue-500' : ''} font-serif text-xl font-bold`}>Create Post</Link>
          </li>
          <li>
            <Link to="/about" className={`text-white hover:text-gray-300 ${location.pathname === '/about' ? 'text-blue-500' : ''} font-mono text-xl font-bold`}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
