import React, { useState, useEffect, useRef } from 'react';
import { Nav } from '../utils/interfaces/nav';
import logo from '../assets/curb-appeal.png';
import {
  HomeIcon,
  CodeOfConductIcon,
  DeviceMobileIcon,
} from '@primer/octicons-react';
const Navigation: React.FC<Nav> = ({ activeComponent, setActiveComponent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigationRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      navigationRef.current &&
      !navigationRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  const navList = () => {
    return (
      <React.Fragment>
        <img className='logo' src={logo} />

        <ul>
          <li
            onClick={() => {
              setActiveComponent('dashboard');
              setIsOpen(false);
            }}
            className={activeComponent === 'dashboard' ? 'active' : ''}
          >
            <div className='iconAndName'>
              <div>
                <HomeIcon size={16} />
              </div>
              <div>Home</div>
            </div>
          </li>
          {/* <li
            onClick={() => {
              setActiveComponent('services');
              setIsOpen(false);
            }}
            className={activeComponent === 'services' ? 'active' : ''}
          >
            <div className='iconAndName'>
              <div>
                <CodeOfConductIcon size={16} />
              </div>
              <div>Services</div>
            </div>
          </li> */}
          <li
            onClick={() => {
              setActiveComponent('contact');
              setIsOpen(false);
            }}
            className={activeComponent === 'contact' ? 'active' : ''}
          >
            <div className='iconAndName'>
              <div>
                <DeviceMobileIcon size={16} />
              </div>
              <div>Contact</div>
            </div>
          </li>
        </ul>
      </React.Fragment>
    );
  };

  return (
    <nav ref={navigationRef}>
      <div className={`desktop-menu ${isOpen ? 'hide' : ''}`}>{navList()}</div>

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

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>{navList()}</div>
    </nav>
  );
};

export default Navigation;
