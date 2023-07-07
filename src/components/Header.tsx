import React from 'react';
import Navigation from './Navigation';
import { Nav } from '../utils/interfaces/nav';

const Header: React.FC<Nav> = ({
  navSelected,
  setNavSelected,
}): JSX.Element => {
  return (
    <header className='header'>
      <div className='navigation'>
        <Navigation navSelected={navSelected} setNavSelected={setNavSelected} />
      </div>
    </header>
  );
};

export default Header;
