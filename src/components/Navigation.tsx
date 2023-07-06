import React, { useState } from 'react';
import { Nav } from '../utils/interfaces/nav';

const Navigation: React.FC<Nav> = ({ navSelected, setNavSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navList = () => {
    return (
      <ul>
        <li
          onClick={() => setNavSelected('home')}
          className={navSelected === 'home' ? 'selected' : ''}
        >
          <a href='/'>Home</a>
        </li>
        <li
          onClick={() => setNavSelected('services')}
          className={navSelected === 'services' ? 'selected' : ''}
        >
          <a href='/services'>Services</a>
        </li>
        <li
          onClick={() => setNavSelected('contact')}
          className={navSelected === 'contact' ? 'selected' : ''}
        >
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    );
  };

  return (
    <nav>
      <div className={`desktop-menu ${isOpen ? 'hide' : ''}`}>{navList()}</div>

      {!isOpen && (
        <svg
          onClick={toggleMenu}
          stroke='currentColor'
          fill='none'
          strokeWidth='1.5'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-6 w-6 menu-hamburger'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line x1='3' y1='12' x2='21' y2='12'></line>
          <line x1='3' y1='6' x2='21' y2='6'></line>
          <line x1='3' y1='18' x2='21' y2='18'></line>
        </svg>
      )}

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <svg
            onClick={toggleMenu}
            stroke='currentColor'
            fill='none'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='close-icon'
            height='1.25em'
            width='1.25em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line x1='18' y1='6' x2='6' y2='18'></line>
            <line x1='6' y1='6' x2='18' y2='18'></line>
          </svg>
        )}
        {navList()}
      </div>
    </nav>
  );
};

export default Navigation;
