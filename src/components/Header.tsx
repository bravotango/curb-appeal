import React from 'react';
import Navigation from './Navigation';
import { Nav } from '../utils/interfaces/nav';

const Header: React.FC<Nav> = ({
  activeComponent,
  setActiveComponent,
}): JSX.Element => {
  return (
    <header className='header'>
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
