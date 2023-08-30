import React from 'react';

interface PictureProps {
  src: string;
  alt: string;
}

const PictureComponent: React.FC<PictureProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default PictureComponent;
