import React from 'react';

interface PictureProps {
  src: string;
  alt: string;
}

const PictureComponent: React.FC<PictureProps> = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

export default PictureComponent;
