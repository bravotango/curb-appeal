import React from 'react';
import Navigation from './Navigation';
import { Nav } from '../utils/interfaces/nav';
import logo from '../assets/curb-appeal.png';

const Header: React.FC<Nav> = ({
  activeComponent,
  setActiveComponent,
}): JSX.Element => {
  return (
    <header className='header'>
      <div></div>
      <div>
        <img className='mobile-logo' src={logo} />
      </div>
      <nav className='navigation'>
        <Navigation
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
      </nav>
    </header>
  );
};

export default Header;
