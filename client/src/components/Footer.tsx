import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <p>
        TEXT HELP:{' '}
        <a href='tel:+4257732818' className='plain'>
          (425) 773-2818
        </a>
      </p>
      <p>&copy; Curb Appeal Landscapes {currentYear}</p>
    </React.Fragment>
  );
};

export default Footer;
