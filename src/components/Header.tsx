import React from 'react';
import Navigation from './Navigation';
import { Nav } from '../utils/interfaces/nav';
import logo from '../assets/curb-appeal-small.png';

const Header: React.FC<Nav> = ({
  activeComponent,
  setActiveComponent,
}): JSX.Element => {
  return (
    <header className='header'>
      <div>
        <img className='logo logo-small' src={logo} />
      </div>
      <div className='navigation'>
        <Navigation
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
      </div>
    </header>
  );
};

export default Header;
