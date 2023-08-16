import React from 'react';

interface PictureProps {
  src: string;
  alt: string;
  caption: string;
}

const PictureComponent: React.FC<PictureProps> = ({ src, alt, caption }) => {
  return (
    <div>
      <img src={src} alt={alt} />
      <p>{caption}</p>
    </div>
  );
};

export default PictureComponent;
