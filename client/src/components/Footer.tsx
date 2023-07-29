import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>&copy;Curb Appeal Landscapes {currentYear}</React.Fragment>
  );
};

export default Footer;
